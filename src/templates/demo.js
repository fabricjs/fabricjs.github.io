import React from "react";
import { graphql, Link } from "gatsby";
import LayoutCodepen from "../components/layoutFullWidthWithCodepen";
import PrevNextLinks from "../components/prevNextPostLinks/prevNextLinks";
import Seo from "../components/seo";

export default ({ data, pageContext, asd }) => {
  return (
    <LayoutCodepen>
			<Seo title={data.demoPage.frontmatter.title}></Seo>
			<nav id="breadcrumb-nav" aria-label="breadcrumb"><Link to='/demos'>Demos</Link> > <span>{data.demoPage.frontmatter.title}</span></nav>
			<h1>{data.demoPage.frontmatter.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: data.demoPage.html }} />
			<PrevNextLinks prev={pageContext.prev || {'title':'All FabricJS demos','slug':'/demos'}} next={pageContext.next}></PrevNextLinks>
    </LayoutCodepen>
  )
}
export const query = graphql`
	query($slug: String!){
		demoPage: markdownRemark(fields: {slug: {eq: $slug}}) {
			html
			frontmatter {
				title
			}
		}
	}
`;
