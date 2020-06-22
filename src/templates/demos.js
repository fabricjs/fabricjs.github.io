import React from "react";
import { graphql } from "gatsby";
//import GatsbyImage from "gatsby-image";
import Layout from "../components/layoutFullWidth";
import ThumbnailList from "../components/list/thumbnailList";
import ThumbnailCard from "../components/card/thumbnailCard";
import Seo from "../components/seo";

export default function({data}){
	const pageDesc = "Awesome demos portraying various interactive aspects and capabilities of FabricJS";
	return(
		<Layout darkBg={true}>
			<Seo title="FabricJS demos"></Seo>
			<h1>FabricJS Demos</h1>
			<p style={{"text-align":"center"}}>{data.allDemoPagesMD.totalCount + ' ' + pageDesc}</p>
			<ThumbnailList>{data.allDemoPagesMD.demoPages.map(({frontmatter,fields})=>(	//map((demoPage)=>(
				<li key={fields.slug}>
					<ThumbnailCard
						title = {frontmatter.title}
						description = {frontmatter.description}
						linkToUrlSlug = {fields.slug}
						buttonText = "View demo"
						gatsbyImgFluid = {frontmatter.thumbnail ? frontmatter.thumbnail.childImageSharp.fluid : null}
					></ThumbnailCard>
				</li>
			))}</ThumbnailList>
		</Layout>
	)
}

//Programmatically create pages from data -- https://www.gatsbyjs.org/tutorial/part-seven/
//Adding markdown pages -- https://www.gatsbyjs.org/docs/adding-markdown-pages/
//Working with Images in Markdown Posts and Pages -- https://www.gatsbyjs.org/docs/working-with-images-in-markdown/

//note that we ignore fetching sub-posts in this query coz we do not want to list sub-posts when listing projects. Sub-posts will b accessible from the page of the relevant post they belong to
export const query = graphql`
	query{
		allDemoPagesMD: allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "//demo/[a-zA-Z0-9-]+/index.md$/"}},
			sort: {order: ASC, fields: frontmatter___title}
		) {
			totalCount
			demoPages: nodes {
				frontmatter {
					title
					description
					thumbnail {
						childImageSharp {
							fluid(maxWidth: 400) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
	}
`;