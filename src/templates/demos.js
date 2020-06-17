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
			<h1>Demos</h1>
			<p>{data.allMarkdownRemark.totalCount + ' ' + pageDesc}</p>
			<ThumbnailList>{data.allMarkdownRemark.edges.map(({node})=>(
				<li key={node.fields.slug}>
					{/*<div>
						<span className="thumbCntnr">
							{node.frontmatter.thumbnail?(
								<GatsbyImage fluid={node.frontmatter.thumbnail.childImageSharp.fluid}></GatsbyImage>
							):(
								//if featured image exists, generate a thumbnail from it
								<img alt="For dummy purpose only" src="https://source.unsplash.com/random/200x200"/>
							)}
						</span>
						<h4>{node.frontmatter.title}</h4>
						{node.frontmatter.description && (<span className="desc">{node.frontmatter.description}</span>)}
						<span className="foot">
							<Link title={node.frontmatter.title} to={node.fields.slug}>View demo</Link>
						</span>
					</div>*/}
					<ThumbnailCard title={node.frontmatter.title} description={node.frontmatter.description} linkToUrlSlug={node.fields.slug} buttonText="View demo" gatsbyImgFluid={node.frontmatter.thumbnail ? node.frontmatter.thumbnail.childImageSharp.fluid : null}></ThumbnailCard>
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
		allMarkdownRemark(
			filter: {fileAbsolutePath: {regex: "//demo/[a-zA-Z0-9-]+/index.md$/"}},
			sort: {order: ASC, fields: frontmatter___title}
		) {
			totalCount
			edges {
				node {
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
	}
`;