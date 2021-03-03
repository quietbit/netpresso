import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { hero: { eq: true } }) {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            heroTitleMain
            heroTitleSub
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heroImage {
              childImageSharp {
                fluid(maxWidth: 2400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        desktop: file(absolutePath: { regex: "/hero-test-bg.jpg/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  const heroTitleMain = data.markdownRemark.frontmatter.heroTitleMain
  const heroTitleSub = data.markdownRemark.frontmatter.heroTitleSub
  //const featuredImgFluid = data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
  const heroImageFluid =
    data.markdownRemark.frontmatter.heroImage.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={heroImageFluid}
      backgroundColor={`#040e18`}
    >
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div>
            <p className="subtitle is-6 has-text-grey-darker">{heroTitleSub}</p>
            <p className="title is-1 has-text-black">{heroTitleMain}</p>
            <button class="button is-primary is-rounded is-large has-text-black mt-4 is-uppercase">
              <div className="subtitle is-6">zakupuj teraz</div>
            </button>
          </div>
        </div>
      </section>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom -90px center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
