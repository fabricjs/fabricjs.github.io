import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layoutFullWidth";

export default ({ data }) => {
  return (
    <Layout>
				<h1>{data.markdownRemark.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}
export const query = graphql`
	query($slug: String!){
		markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
			}
		}
	}
`;