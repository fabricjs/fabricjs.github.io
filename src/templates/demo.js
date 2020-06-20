import React from "react";
import { graphql } from "gatsby";
import LayoutCodepen from "../components/layoutFullWidthWithCodepen";
import PrevNextLinks from "../components/prevNextPostLinks/prevNextLinks";

export default ({ data, pageContext }) => {
  return (
    <LayoutCodepen>
				<h1>{data.markdownRemark.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
				<PrevNextLinks prev={pageContext.prev} next={pageContext.next}></PrevNextLinks>
    </LayoutCodepen>
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
