import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import TableOfContents from "../components/tableOfContents/tableOfContents";
import PrevNextLinks from "../components/prevNextPostLinks/prevNextLinks";
import Seo from "../components/seo";


export default ({pageContext,data}) => {
  return (
    <Layout leftSidebar={(setVisibility)=>(
			<>
				<header>Guides</header>
				<nav id="topics" aria-label="Contents">
					<ol>
						<li><Link onClick={()=>{setVisibility(false)}} title="Introduction" to="/docs">Introduction</Link></li>
						{
							pageContext.docList.map(({title,slug})=>(
								<li key={slug}>
									<Link onClick={()=>{setVisibility(false)}} activeClassName="active" title={title} to={slug}>{title}</Link>
									{pageContext.slug === slug &&(
										<TableOfContents hideSidebar={()=>{setVisibility(false)}} tableOfContentsHtml={data.docPage.toc} />
									)}
								</li>
							))
						}
					</ol>
				</nav>
			</>
		)}>
			<Seo title={data.docPage.frontmatter.title}></Seo>
			<nav id="breadcrumb-nav" aria-label="breadcrumb"><Link to='/docs'>Guide docs</Link> > <span>{data.docPage.frontmatter.title}</span></nav>
			<h1>{data.docPage.frontmatter.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: data.docPage.html }} />
			<PrevNextLinks prev={pageContext.prev || {'title':'Introduction','slug':'/docs'}} next={pageContext.next}/>
    </Layout>
  )
}
export const query = graphql`
	query($slug: String!){
		docPage: markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
			toc: tableOfContents(absolute: false,maxDepth: 2)
		}
	}
`;