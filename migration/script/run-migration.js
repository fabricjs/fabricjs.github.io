import glob from "glob"
import fs from 'fs';
import html2md from 'html-to-md'
import path from 'path';

const options = {
  skipTags: [
    'div',
    'html',
    'body',
    'nav',
    'section',
    'footer',
    'main',
    'aside',
    'article',
    'header'
  ],
  ignoreTags: [
    '',
    'style',
    'head',
    '!doctype',
    'form',
    'svg',
    'noscript',
    'script',
    'meta'
  ]
}

const PATH_TO_OLD_DOCUMENTATION_HTML_FILES = "../old-docs/fabricjs.com/docs/**/*.html";
const PATH_TO_NEW_DOCUMENTATION_DIRECTORY = "../../docs/";

function convertHtmlToMarkdown(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  html = preProcessHtml(html);
  let markdownContent = html2md(html, options, true).toString()
  markdownContent = postProcessMarkdown(markdownContent);

  let directory = "unknown";
  if (markdownContent.includes("# Namespace: ")) {
    directory = "namespaces";
    markdownContent = markdownContent.replace("# Namespace: ", "# ");
  } else {
    directory = "classes";
    markdownContent = markdownContent.replace("# Class: ", "# ");
  }

  return {
    directory,
    markdownContent
  };
}

function preProcessHtml(html) {

  // all class members are in h4 tags, Docusaurus creates table of content from h2 and h3 tags by default
  html = html.replace(/h4/g, "h2")

  return html;
}

function postProcessMarkdown(inputMarkdown) {
  let outputMarkdown = inputMarkdown;

  //remove same header from every HTML file
  outputMarkdown = outputMarkdown.split('\n');
  outputMarkdown.splice(0, 100);
  outputMarkdown = outputMarkdown.join('\n');

  //remove all '<' '>', because texts like '<optional>' were causing problems
  outputMarkdown = outputMarkdown
    .replace(/</g, "")
    .replace(/>/g, "");

  return outputMarkdown;
}

function start() {
  glob(PATH_TO_OLD_DOCUMENTATION_HTML_FILES, {}, function (error, files) {
    const filePath = files[0]; //process only one file instead all of them
    // for (let filePath of files) {

      const {directory, markdownContent} = convertHtmlToMarkdown(filePath)
      const filename = path.parse(filePath).base.replace(".html", "");
      const markdownFilePath = PATH_TO_NEW_DOCUMENTATION_DIRECTORY + "/" + directory + "/" + filename + ".md";
      fs.writeFileSync(markdownFilePath, markdownContent);

    // }
  })
}


start();
