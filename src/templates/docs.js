import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import TableOfContents from "../components/tableOfContents/tableOfContents";
import PrevNextLinks from "../components/prevNextPostLinks/prevNextLinks";
import Seo from "../components/seo";

export default ({pageContext,data}) => {
	return(
		<Layout leftSidebar={(setVisibility)=>(
			<>
				<header>Guides</header>
				<nav id="topics" aria-label="Contents">
					<ol>
						<li>
							<Link onClick={()=>{setVisibility(false)}} activeClassName="active" title="Introduction" to="/docs">Introduction</Link>
							<TableOfContents hideSidebar={()=>{setVisibility(false)}} tableOfContentsHtml={data.introPage.toc} />
						</li>
						{
							pageContext.docList.map(({title,slug})=>(
								<li key={slug}>
									<Link onClick={()=>{setVisibility(false)}} title={title} to={slug}>{title}</Link>
								</li>
							))
						}
					</ol>
				</nav>
			</>
		)}>
			<Seo title={data.introPage.frontmatter.title}></Seo>
			<nav id="breadcrumb-nav" aria-label="breadcrumb"><Link to='/'>FabricJS</Link> > <span>Docs</span></nav>
			<h1>{data.introPage.frontmatter.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: data.introPage.html }} />
			<PrevNextLinks
				next={{
					'title':pageContext.docList[0].title,
					'slug':pageContext.docList[0].slug
				}}
			/>
		</Layout>
	)
}

export const query = graphql`
	query {
		introPage : markdownRemark(fileAbsolutePath: {regex: "//docs/introduction.md$/"}) {
			html
			frontmatter {
				title
			}
			toc: tableOfContents(absolute: false,maxDepth: 2)
		}
	}
`;