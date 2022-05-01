import React, { useEffect } from "react";
import { useState } from "react";
// @ts-ignore
import Blinker from "assets/fonts/blinker-v12-latin-regular.ttf";
import BlinkerLight from "assets/fonts/blinker-v12-latin-200.ttf";
import BlinkerNormal from "assets/fonts/blinker-v12-latin-300.ttf";
import BlinkerBold from "assets/fonts/blinker-v12-latin-600.ttf";
import BlinkerBoldExtra from "assets/fonts/blinker-v12-latin-700.ttf";
import img from "../../../public/yadab.jpg";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Note,
  Font,
  Rect,
  Link,
  Svg,
  G,
  Path,
  Line,
  Circle,
} from "@react-pdf/renderer";

const color = {
  font: "#808080",
  accent: "#00bcd4",
  accent2: "#607d8b",
  line: "#bebebe",
  light: "#f1f1f1",
  dark: "#a0a5aa",
  link: "#ca7900",
};

Font.register({
  family: "Blinker",
  src: Blinker,
  fonts: [
    {
      src: BlinkerLight,
      fontWeight: "light",
    },
    {
      src: BlinkerNormal,
      fontWeight: "thin",
    },
    {
      src: Blinker,
      fontWeight: "normal",
    },
    {
      src: BlinkerBold,
      fontWeight: "bold",
    },
    {
      src: BlinkerBoldExtra,
      fontWeight: "extrabold",
    },
  ],
});

// Create styles
const template = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  title: {
    fontSize: 12,
    color: color.accent,
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    fontWeight: "bold",
    position: "relative",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "normal",
    color: "black",
    textTransform: "capitalize",
  },
  titleLine: {
    height: 0.3,
    backgroundColor: color.line,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 3,
  },
  para: {},
  link: {
    color: color.accent2,
  },
  icon: {
    height: 11,
    width: 10,
    marginRight: 8,
    paddingBottom: 2,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "gray",
  },
  col: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingRight: 10,
    flexGrow: 1,
  },
  col1: {
    position: "relative",
    maxWidth: 100,
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingRight: 10,
  },
  design: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  titleLineV: {
    position: "absolute",
    height: "100%",
    backgroundColor: color.light,
    flexGrow: 1,
    width: 0.5,
    transform: "translateX(-0.5px)",
    left: "50%",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  small: {
    fontSize: 8,
    fontWeight: "thin",
  },
  bold: {
    fontWeight: "bold",
  },
  hobby: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  hobbyImg: {
    width: 20,
    marginBottom: 5,
  },
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    fontSize: 9,
    color: color.font,
    lineHeight: 1.4,
    fontFamily: "Blinker",
    fontWeight: "normal",
  },
  sectionLeft: {
    backgroundColor: color.light,
    flex: "1 1 35%",
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.6,
    "@media max-width: 400": {
      width: 300,
    },
  },
  sectionRight: {
    ...template.section,
    padding: 30,
    flex: "1 1 65%",
    height: "calc(100% - 60px)",
    display: "flex",
    flexDirection: "column",
    marginBottom: 0,
    justifyContent: "flex-start",
  },
  leftLightSection: {
    padding: 20,
  },
  imageTitleSection: {
    ...template.section,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageWrapper: {
    height: 125,
    width: 125,
    overflow: "hidden",
    borderRadius: 500,
    backgroundColor: "white",
    display: "flex",
    margin: "auto",
  },
  image: {},
  myName: {
    ...template.title,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    color: "black",
    lineHeight: 1,
    marginBottom: 5,
  },
  designation: {
    ...template.subtitle,
    color: color.accent2,
    marginTop: 0,
    fontSize: 11,
  },
  contact: {
    ...template.section,
    marginBottom: 0,
    paddingTop: 10,
  },
  contactTitle: {
    ...template.title,
    color: "gray",
  },
  leftDarkSection: {
    backgroundColor: color.dark,
    flexGrow: 1,
    color: "white",
    padding: 20,
  },
  darkTitle: {
    ...template.title,
    color: "white",
  },
  skill: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    alignItems: "baseline",
    fontSize: 9,
  },
});

const Title = ({
  dark,
  style,
  name,
}: {
  dark: boolean;
  style: any;
  name: string;
}) => (
  <View style={{ ...template.title, ...style }}>
    <Text>{name}</Text>
    <Svg
      viewBox="0 0 85 5"
      style={{
        ...template.titleLine,
        backgroundColor: dark ? color.light : color.line,
      }}
    >
      <Line
        // fill={dark ? color.light : color.line}
        x1={15}
        y1={0}
        x2={85}
        y2={0}
      />
    </Svg>
  </View>
);

const Design = () => (
  <View style={{ ...template.design }}>
    <Line
      style={template.titleLineV}
      fill={color.accent}
      x1={0}
      y1={0}
      x2={0}
      y2={100}
    />
    <Svg width="10" height="10" viewBox="0 0 10 10">
      <Circle
        cx="5"
        cy="5"
        r="3"
        style={{ stroke: color.accent, strokeWidth: 1, fill: "white" }}
      />
    </Svg>
  </View>
);

export const Resume: any = () => {
  return (
    <Document title="Resume">
      {/* @ts-ignore */}
      <Page wrap={true} size="A4" style={styles.page}>
        <View style={styles.sectionLeft}>
          <View style={styles.leftLightSection}>
            {/* @ts-ignore */}
            <View style={styles.imageTitleSection}>
              {/* @ts-ignore */}
              <View style={styles.imageWrapper}>
                {/* @ts-ignore */}
                <Image src={img.src} />
              </View>
              <Text style={styles.myName}>YADAB SUTRADHAR</Text>
              <Text style={styles.designation}>Software Engineer</Text>
              {/* <Note style={styles.myName}>Yadab Sutradhar</Note> */}
            </View>
            <View style={styles.contact}>
              <Title style={styles.contactTitle} name="CONTACT" />
              {/* @ts-ignore */}
              <View style={template.content}>
                <View style={template.iconContainer}>
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/phone.png"
                  />
                  <Text>+8801733267990</Text>
                </View>
                <View style={template.iconContainer}>
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/new-post.png"
                  />
                  <Text>yadab.sd2013@gmail.com</Text>
                </View>
                <View style={template.iconContainer}>
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material/24/000000/globe.png"
                  />
                  <Text style={{ ...template.link, color: color.font }}>
                    yadab.me
                  </Text>
                </View>
                <View style={template.iconContainer}>
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/github.png"
                  />
                  <Text>github.com/Yadab-Sd</Text>
                </View>
                <View style={template.iconContainer}>
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/marker.png"
                  />
                  <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
                </View>
                {/* <Link src="https://yadab.me" style={template.link}>
                  yadab.me
                </Link> */}
              </View>
            </View>
          </View>
          <View style={styles.leftDarkSection}>
            <View style={template.section}>
              <Title style={styles.darkTitle} name="SKILLS" dark />
              <View style={template.row}>
                <View style={{ ...template.col, paddingRight: 20 }}>
                  <Text style={styles.skill}>
                    NextJs <Text style={template.small}>(Proficient)</Text>
                  </Text>
                  <Text style={styles.skill}>
                    Angular <Text style={template.small}>(Intermediate)</Text>
                  </Text>
                  <Text style={styles.skill}>
                    JavaScript <Text style={template.small}>(Proficient)</Text>
                  </Text>
                  <Text style={styles.skill}>Express</Text>
                  <Text style={styles.skill}>Graphql</Text>
                  <Text style={styles.skill}>Material UI</Text>
                  <Text style={styles.skill}>PostgreSQL</Text>
                  <Text style={styles.skill}>Redux</Text>
                </View>
                <View style={template.col}>
                  <Text style={styles.skill}>
                    ReactJs <Text style={template.small}>(Proficient)</Text>
                  </Text>
                  <Text style={styles.skill}>
                    VueJs <Text style={template.small}>(Intermediate)</Text>
                  </Text>
                  <Text style={styles.skill}>
                    TypeScript <Text style={template.small}>(Proficient)</Text>
                  </Text>
                  <Text style={styles.skill}>
                    NodeJs <Text style={template.small}>(Intermediate)</Text>
                  </Text>
                  <Text style={styles.skill}>ElasticSearch</Text>
                  <Text style={styles.skill}>TailwindCss</Text>
                  <Text style={styles.skill}>MongoDB</Text>
                  <Text style={styles.skill}>Firebase</Text>
                </View>
              </View>
            </View>
            <View style={template.section}>
              <Title style={styles.darkTitle} name="CERTIFICATION" dark />
              {/* @ts-ignore */}
              <View>
                {/* <Text>IELTS</Text> */}
                <Text>APTIS (C-92)</Text>
                <Text>SKIT</Text>
                <Text>LEDP</Text>
                {/* <Text>SOLO LEARN</Text> */}
                <Text>Security & Compliance</Text>
              </View>
            </View>
            <View style={template.section}>
              <Title style={styles.darkTitle} name="ACHEIVEMENTS" dark />
              {/* @ts-ignore */}
              <View>
                <Text>Problem Solve - 500+</Text>
                <Text>Projects - 30+</Text>
                <Text>Certification - 5</Text>
                <Text>Awards - 3</Text>
                <Text>Contribution Media - 5+</Text>
              </View>
            </View>
            <View
              style={{
                ...template.section,
                marginBottom: 10,
                marginTop: "auto",
              }}
            >
              <Title style={styles.darkTitle} name="PERSONAL INTERESTS" dark />
              {/* @ts-ignore */}
              <View style={template.row}>
                <View style={template.col}>
                  <Image
                    style={template.hobbyImg}
                    src="https://img.icons8.com/ios/60/000000/laptop-coding.png"
                  />
                  <Text>Coding</Text>
                </View>
                <View style={template.col}>
                  <Image
                    style={template.hobbyImg}
                    src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-fishing-summer-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  />
                  <Text>Fishing</Text>
                </View>
                <View style={template.col}>
                  <Image
                    style={template.hobbyImg}
                    src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-chess-business-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  />
                  <Text>Chess</Text>
                </View>
                <View style={template.col}>
                  <Image
                    style={template.hobbyImg}
                    src="https://img.icons8.com/ios/60/000000/drawing--v2.png"
                  />
                  <Text>Painting</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* @ts-ignore */}
        <View style={styles.sectionRight}>
          <View style={template.section}>
            <Title name="ABOUT ME" />
            <View style={template.content}>
              <Text>
                A qualified and enthusiastic person, with worth of 2 years+
                experience. I am a current technologist graduate. Excellent
                analytical and organizational skills. I am self-motivated
                individual that can gives 100% in everything I do. Designated as
                Front-end developer with 2 years experience in Software
                Industry, specialized in various filed with proven track record
                of successes.
              </Text>
            </View>
          </View>

          <View style={template.section}>
            <Title name="PROJECTS" />
            <View style={template.row}>
              <View style={template.col1}>
                <View style={{ ...template.content }}>
                  <Text style={template.subtitle}>Jachai</Text>
                  <Text style={template.subtitle}>Augmedix</Text>
                  <Text style={template.subtitle}>Invariant</Text>
                </View>
              </View>
              <View style={template.col}>
                <View style={template.content}>
                  <Design />
                  <Design />
                  <Design />
                </View>
              </View>
              <View style={template.col}>
                <View style={{ ...template.content, marginBottom: 5 }}>
                  <Text style={template.subtitle}>E-Commerce Platform</Text>
                  <Text style={template.link}>jachai.com</Text>
                  <Text>Tech Stack: NextJS, TailwindCss, Elastic Search</Text>
                  <Text>Speciality: Hundred thousand of users</Text>
                </View>
                <View style={{ ...template.content, marginBottom: 5 }}>
                  <Text style={template.subtitle}>
                    Medical Innovative Software
                  </Text>
                  <Text style={template.link}>augmedix.com</Text>
                  <Text>Tech Stack: Angular, Scss, Jasmine</Text>
                  <Text>Speciality: Multi-national software</Text>
                </View>
                <View style={template.content}>
                  <Text style={template.subtitle}>Diversity</Text>
                  <Text style={template.link}>invarianttele.com</Text>
                  <Text>
                    Tech Stack: React, Jekyll, Bootstrap, Firebase, Express
                  </Text>
                  <Text>Speciality: Composite of softwares</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={template.section}>
            <Title name="WORK EXPERIENCE" />
            {/* @ts-ignore */}
            <View style={template.content}>
              <View style={template.row}>
                <View style={template.col1}>
                  <View style={template.content}>
                    <Text style={template.subtitle}>Augmedix</Text>
                    <Text style={template.subtitle}>Jachai Ltd.</Text>
                    <Text style={template.subtitle}>Invariant Telecom</Text>
                  </View>
                </View>
                <View style={template.col}>
                  <View style={template.content}>
                    <Design />
                    <Design />
                    <Design />
                  </View>
                </View>
                <View style={template.col}>
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    <Text style={template.subtitle}>Software Engineer</Text>
                    <Text>Duration: 03/01/2022 - Now</Text>
                    <Text>Responsibility: Contribute, Develop, Unit Test</Text>
                  </View>
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    <Text style={template.subtitle}>Software Engineer</Text>
                    <Text>Duration: 28/08/2021 - 01/01/2022</Text>
                    <Text>
                      Responsibility: Lead, Planning, Develop, Code Review
                    </Text>
                  </View>
                  <View style={template.content}>
                    <Text style={template.subtitle}>Software Engineer</Text>
                    <Text>Duration: 29/09/2019 - 13/08/2021</Text>
                    <Text>Responsibility: Planning, Develop, Deploy</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={template.section}>
            <Title name="ACADEMIC" />
            {/* @ts-ignore */}
            <View style={template.content}>
              <View style={template.row}>
                <View style={template.col1}>
                  <View style={template.content}>
                    <Text style={template.subtitle}>
                      Bachelor of Science (Engineering)
                    </Text>
                    <Text style={template.subtitle}>
                      Higher Secondary Certificate
                    </Text>
                  </View>
                </View>
                <View style={template.col}>
                  <View style={template.content}>
                    <Design />
                    <Design />
                  </View>
                </View>
                <View style={template.col}>
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    <Text style={template.subtitle}>
                      Information & Communication Technoloy
                    </Text>
                    <Text>Institution: Comilla University</Text>
                    <Text>Result: 3.21 / 4.00</Text>
                    <Text>Passing Time: 01/2019</Text>
                  </View>
                  <View style={template.content}>
                    <Text style={template.subtitle}>Science Group</Text>
                    <Text>Institution: Sonar Bangla College</Text>
                    <Text>Result: 5.00 / 5.00</Text>
                    <Text>Passing Time: 03/2012</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{ ...template.section, marginTop: "auto", marginBottom: 0 }}
          >
            {/* @ts-ignore */}
            <View style={template.row}>
              <View style={template.col}>
                <Title name="PROBLEM SOLVING" />
                <View style={template.content}>
                  <Text style={template.subtitle}>
                    CoU CSE Fest - 2016 (4th)
                  </Text>
                  <Text style={{ ...template.subtitle, marginBottom: 5 }}>
                    NCPC - 2017 (28th)
                  </Text>
                  <Text>LeetCode: leetcode.com/yadabsd</Text>
                  <Text>Codeforces</Text>
                  <Text>TopCoder</Text>
                </View>
              </View>
              <View style={template.col}>
                <Title name="PERSONAL INFO" />
                <View
                  style={{ ...template.content, justifyContent: "flex-start" }}
                >
                  <View style={template.row}>
                    <View style={template.col}>
                      <View style={template.content}>
                        <Text>Date of Birth: </Text>
                        <Text>NID: </Text>
                        <Text>Gender: </Text>
                        <Text>Nationality: </Text>
                        <Text>Language Skill: </Text>
                      </View>
                    </View>
                    <View style={template.col}>
                      <View style={template.content}>
                        <Text>25/05/1994</Text>
                        <Text>19948509000021</Text>
                        <Text>Male</Text>
                        <Text>Bangladeshi</Text>
                        <Text>English, Benglali</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default React.memo(Resume);
