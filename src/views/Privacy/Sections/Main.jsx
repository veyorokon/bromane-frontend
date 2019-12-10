import React from "react";
import { FlexColumn, Text } from "components/core";
import { Title, SubTitle } from "components/styled";
import * as S from "./styled";

class Main extends React.Component {
  render() {
    return (
      <FlexColumn
        height={["fit-content"]}
        minHeight={["fit-content"]}
        bg={"green.0"}
        p="5rem"
        paddingTop="12rem"
      >
        <S.TitleWrapper color="black.0" alignItems="center" p={"5% 10% 5% 10%"}>
          <Title textAlign="left">Privacy Policy</Title>
        </S.TitleWrapper>
        <SubTitle textAlign="center">
          Your privacy is critically important to us.
        </SubTitle>
        <br />{" "}
        <span style={{ textTransform: "capitalize" }}> bromane.com </span> is
        located at:
        <br />
        <address>
          Bromane.com
          <br />
          8412 Paul Drive, WEST CHESTER <br />
          45069 - OH , United States
          <br />
        </address>
        <Text pt="5px">
          It is Bromane.com's policy to respect your privacy regarding any
          information we may collect while operating our website. This Privacy
          Policy applies to{" "}
          <a href="https://bromane.com">https://bromane.com</a> (hereinafter,
          "us", "we", or "https://bromane.com"). We respect your privacy and are
          committed to protecting personally identifiable information you may
          provide us through the Website. We have adopted this privacy policy
          ("Privacy Policy") to explain what information may be collected on our
          Website, how we use this information, and under what circumstances we
          may disclose the information to third parties. This Privacy Policy
          applies only to information we collect through the Website and does
          not apply to our collection of information from other sources.
        </Text>
        <Text pt="5px">
          This Privacy Policy, together with the Terms and conditions posted on
          our Website, set forth the general rules and policies governing your
          use of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms and
          conditions.
        </Text>
        <SubTitle>Website Visitors</SubTitle>
        <Text pt="5px">
          Like most website operators, Bromane.com collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. Bromane.com's purpose in collecting non-personally
          identifying information is to better understand how Bromane.com's
          visitors use its website. From time to time, Bromane.com may release
          non-personally-identifying information in the aggregate, e.g., by
          publishing a report on trends in the usage of its website.
        </Text>
        <Text pt="5px">
          Bromane.com also collects potentially personally-identifying
          information like Internet Protocol (IP) addresses for logged in users
          and for users leaving comments on https://bromane.com blog posts.
          Bromane.com only discloses logged in user and commenter IP addresses
          under the same circumstances that it uses and discloses
          personally-identifying information as described below.
        </Text>
        <SubTitle>Gathering of Personally-Identifying Information</SubTitle>
        <Text pt="5px">
          Certain visitors to Bromane.com's websites choose to interact with
          Bromane.com in ways that require Bromane.com to gather
          personally-identifying information. The amount and type of information
          that Bromane.com gathers depends on the nature of the interaction. For
          example, we ask visitors who sign up for a blog at https://bromane.com
          to provide a username and email address.
        </Text>
        <SubTitle>Security</SubTitle>
        <Text pt="5px">
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </Text>
        <SubTitle>Advertisements</SubTitle>
        <Text pt="5px">
          Ads appearing on our website may be delivered to users by advertising
          partners, who may set cookies. These cookies allow the ad server to
          recognize your computer each time they send you an online
          advertisement to compile information about you or others who use your
          computer. This information allows ad networks to, among other things,
          deliver targeted advertisements that they believe will be of most
          interest to you. This Privacy Policy covers the use of cookies by
          Bromane.com and does not cover the use of cookies by any advertisers.
        </Text>
        <SubTitle>Links To External Sites</SubTitle>
        <Text pt="5px">
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms and conditions of every site you visit.
        </Text>
        <Text pt="5px">
          We have no control over, and assume no responsibility for the content,
          privacy policies or practices of any third party sites, products or
          services.
        </Text>
        <SubTitle>Aggregated Statistics</SubTitle>
        <Text pt="5px">
          Bromane.com may collect statistics about the behavior of visitors to
          its website. Bromane.com may display this information publicly or
          provide it to others. However, Bromane.com does not disclose your
          personally-identifying information.
        </Text>
        <SubTitle>Cookies</SubTitle>
        <Text pt="5px">
          To enrich and perfect your online experience, Bromane.com uses
          "Cookies", similar technologies and services provided by others to
          display personalized content, appropriate advertising and store your
          preferences on your computer.
        </Text>
        <Text pt="5px">
          A cookie is a string of information that a website stores on a
          visitor's computer, and that the visitor's browser provides to the
          website each time the visitor returns. Bromane.com uses cookies to
          help Bromane.com identify and track visitors, their usage of
          https://bromane.com, and their website access preferences. Bromane.com
          visitors who do not wish to have cookies placed on their computers
          should set their browsers to refuse cookies before using Bromane.com's
          websites, with the drawback that certain features of Bromane.com's
          websites may not function properly without the aid of cookies.
        </Text>
        <Text pt="5px">
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to Bromane.com's use of
          cookies.
        </Text>
        <SubTitle>E-commerce</SubTitle>
        <Text pt="5px">
          Those who engage in transactions with Bromane.com – by purchasing
          Bromane.com's services or products, are asked to provide additional
          information, including as necessary the personal and financial
          information required to process those transactions. In each case,
          Bromane.com collects such information only insofar as is necessary or
          appropriate to fulfill the purpose of the visitor's interaction with
          Bromane.com. Bromane.com does not disclose personally-identifying
          information other than as described below. And visitors can always
          refuse to supply personally-identifying information, with the caveat
          that it may prevent them from engaging in certain website-related
          activities.
        </Text>
        <SubTitle>Privacy Policy Changes</SubTitle>
        <Text pt="5px">
          Although most changes are likely to be minor, Bromane.com may change
          its Privacy Policy from time to time, and in Bromane.com's sole
          discretion. Bromane.com encourages visitors to frequently check this
          page for any changes to its Privacy Policy. Your continued use of this
          site after any change in this Privacy Policy will constitute your
          acceptance of such change.
        </Text>
      </FlexColumn>
    );
  }
}

export default Main;
