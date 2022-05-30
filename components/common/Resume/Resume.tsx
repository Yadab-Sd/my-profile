import React, { useEffect } from "react";
import { useState } from "react";
// @ts-ignore
import Blinker from "assets/fonts/blinker-v12-latin-regular.ttf";
// @ts-ignore
import BlinkerLight from "assets/fonts/blinker-v12-latin-200.ttf";
// @ts-ignore
import BlinkerNormal from "assets/fonts/blinker-v12-latin-300.ttf";
// @ts-ignore
import BlinkerBold from "assets/fonts/blinker-v12-latin-600.ttf";
// @ts-ignore
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
  // @ts-ignore
  <View style={{ ...template.title, ...style }}>
    {/* @ts-ignore */}
    <Text>{name}</Text>
    {/* @ts-ignore */}
    <Svg
      viewBox="0 0 85 5"
      style={{
        ...template.titleLine,
        backgroundColor: dark ? color.light : color.line,
      }}
    >
      {/* @ts-ignore */}
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
  // @ts-ignore
  <View style={{ ...template.design }}>
    {/* @ts-ignore */}
    <Line
      style={template.titleLineV}
      fill={color.accent}
      x1={0}
      y1={0}
      x2={0}
      y2={100}
    />
    {/* @ts-ignore */}
    <Svg width="10" height="10" viewBox="0 0 10 10">
      {/* @ts-ignore */}
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
    // @ts-ignore
    <Document title="Resume">
      {/* @ts-ignore */}
      <Page wrap={true} size="A4" style={styles.page}>
        {/* @ts-ignore */}
        <View style={styles.sectionLeft}>
          {/* @ts-ignore */}
          <View style={styles.leftLightSection}>
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            <View style={styles.imageTitleSection}>
              {/* @ts-ignore */}
              {/* @ts-ignore */}
              <View style={styles.imageWrapper}>
                {/* @ts-ignore */}
                {/* @ts-ignore */}
                <Image src={img.src} />
              </View>
              {/* @ts-ignore */}
              <Text style={styles.myName}>YADAB SUTRADHAR</Text>
              {/* @ts-ignore */}
              <Text style={styles.designation}>Software Engineer</Text>
              {/* <Note style={styles.myName}>Yadab Sutradhar</Note> */}
            </View>
            {/* @ts-ignore */}
            <View style={styles.contact}>
              {/* @ts-ignore */}
              <Title style={styles.contactTitle} name="CONTACT" />
              {/* @ts-ignore */}
              {/* @ts-ignore */}
              <View style={template.content}>
                {/* @ts-ignore */}
                <View style={template.iconContainer}>
                  {/* @ts-ignore */}
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/phone.png"
                  />
                  {/* @ts-ignore */}
                  <Text>+8801733267990</Text>
                </View>
                {/* @ts-ignore */}
                <View style={template.iconContainer}>
                  {/* @ts-ignore */}
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/new-post.png"
                  />
                  {/* @ts-ignore */}
                  <Text>yadab.sd2013@gmail.com</Text>
                </View>
                {/* @ts-ignore */}
                <View style={template.iconContainer}>
                  {/* @ts-ignore */}
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material/24/000000/globe.png"
                  />
                  {/* @ts-ignore */}
                  <Link src="https://yadab.me" style={template.link}>
                    yadab.me
                  </Link>
                </View>
                {/* @ts-ignore */}
                <View style={template.iconContainer}>
                  {/* @ts-ignore */}
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/github.png"
                  />
                  {/* @ts-ignore */}
                  <Text>github.com/Yadab-Sd</Text>
                </View>
                {/* @ts-ignore */}
                <View style={template.iconContainer}>
                  {/* @ts-ignore */}
                  <Image
                    style={template.icon}
                    src="https://img.icons8.com/material-outlined/24/000000/marker.png"
                  />
                  {/* @ts-ignore */}
                  <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
                </View>
              </View>
            </View>
          </View>
          {/* @ts-ignore */}
          <View style={styles.leftDarkSection}>
            {/* @ts-ignore */}
            <View style={template.section}>
              {/* @ts-ignore */}
              <Title style={styles.darkTitle} name="SKILLS" dark />
              {/* @ts-ignore */}
              <View style={template.row}>
                {/* @ts-ignore */}
                <View style={{ ...template.col, paddingRight: 20 }}>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    NextJs
                    {/* @ts-ignore */}
                    <Text style={template.small}> (Proficient)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    Angular
                    {/* @ts-ignore  */}
                    <Text style={template.small}> (Intermediate)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    JavaScript
                    {/* @ts-ignore */}
                    <Text style={template.small}> (Proficient)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>Express</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>Graphql</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>Material UI</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>PostgreSQL</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>Redux</Text>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    ReactJs
                    {/* @ts-ignore  */}
                    <Text style={template.small}> (Proficient)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    VueJs
                    {/* @ts-ignore  */}
                    <Text style={template.small}> (Intermediate)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    TypeScript
                    {/* @ts-ignore  */}
                    <Text style={template.small}> (Proficient)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>
                    NodeJs
                    {/* @ts-ignore  */}
                    <Text style={template.small}> (Intermediate)</Text>
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>ElasticSearch</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>TailwindCss</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>MongoDB</Text>
                  {/* @ts-ignore */}
                  <Text style={styles.skill}>Firebase</Text>
                </View>
              </View>
            </View>
            {/* @ts-ignore */}
            <View style={template.section}>
              {/* @ts-ignore */}
              <Title style={styles.darkTitle} name="CERTIFICATION" dark />
              {/* @ts-ignore */}
              {/* @ts-ignore */}
              <View>
                {/* @ts-ignore{/*  */}
                {/* <Text>IELTS</Text> */}
                {/* @ts-ignore */}
                <Text>APTIS (C-92)</Text>
                {/* @ts-ignore */}
                <Text>SKIT</Text>
                {/* @ts-ignore */}
                <Text>LEDP</Text>
                {/* @ts-ignore{/*  */}
                {/* <Text>SOLO LEARN</Text> */}
                {/* @ts-ignore */}
                <Text>Security & Compliance</Text>
              </View>
            </View>
            {/* @ts-ignore */}
            <View style={template.section}>
              {/* @ts-ignore */}
              <Title style={styles.darkTitle} name="ACHEIVEMENTS" dark />
              {/* @ts-ignore */}
              {/* @ts-ignore */}
              <View>
                {/* @ts-ignore */}
                <Text>Problem Solve - 500+</Text>
                {/* @ts-ignore */}
                <Text>Projects - 30+</Text>
                {/* @ts-ignore */}
                {/* @ts-ignore */}
                <Text>Held tutoring sessions (algebra) - 100+</Text>
                {/* @ts-ignore */}
                <Text>Certification - 5</Text>
                {/* @ts-ignore */}
                <Text>Awards - 3</Text>
                {/* @ts-ignore */}
                <Text>Contribution Media - 5+</Text>
              </View>
            </View>
            {/* @ts-ignore */}
            <View
              style={{
                ...template.section,
                marginBottom: 10,
                marginTop: "auto",
              }}
            >
              {/* @ts-ignore */}
              <Title style={styles.darkTitle} name="PERSONAL INTERESTS" dark />
              {/* @ts-ignore */}
              {/* @ts-ignore */}
              <View style={template.row}>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.hobby}>
                    {/* @ts-ignore */}
                    <Image
                      style={template.hobbyImg}
                      src="https://img.icons8.com/ios/60/000000/laptop-coding.png"
                    />
                    {/* @ts-ignore */}
                    <Text>Coding</Text>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.hobby}>
                    {/* @ts-ignore */}
                    <Image
                      style={template.hobbyImg}
                      src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-fishing-summer-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                    />
                    {/* @ts-ignore */}
                    <Text>Fishing</Text>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.hobby}>
                    {/* @ts-ignore */}
                    <Image
                      style={template.hobbyImg}
                      src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-chess-business-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                    />
                    {/* @ts-ignore */}
                    <Text>Chess</Text>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.hobby}>
                    {/* @ts-ignore */}
                    <Image
                      style={template.hobbyImg}
                      src="https://img.icons8.com/ios/60/000000/drawing--v2.png"
                    />
                    {/* @ts-ignore */}
                    <Text>Painting</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* @ts-ignore */}
        {/* @ts-ignore */}
        <View style={styles.sectionRight}>
          {/* @ts-ignore */}
          <View style={template.section}>
            {/* @ts-ignore */}
            <Title name="ABOUT ME" />
            {/* @ts-ignore */}
            <View style={template.content}>
              {/* @ts-ignore */}
              <Text>
                A qualified and enthusiastic person, with 2.5 years experience. I
                am a current technologist graduate. Excellent analytical and
                organizational skills. I am a self-motivated individual that can
                give 100% in everything I do. Designated as Software Engineer
                with 2.5 years of solid experience in Software Industry,
                specialized in various fields with proven track record of
                successes.
              </Text>
            </View>
          </View>

          {/* @ts-ignore */}
          <View style={template.section}>
            {/* @ts-ignore */}
            <Title name="PROJECTS" />
            {/* @ts-ignore */}
            <View style={template.row}>
              {/* @ts-ignore */}
              <View style={template.col1}>
                {/* @ts-ignore */}
                <View style={{ ...template.content }}>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>Jachai</Text>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>Augmedix</Text>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>Invariant</Text>
                </View>
              </View>
              {/* @ts-ignore */}
              <View style={template.col}>
                {/* @ts-ignore */}
                <View style={template.content}>
                  <Design />
                  <Design />
                  <Design />
                </View>
              </View>
              {/* @ts-ignore */}
              <View style={template.col}>
                {/* @ts-ignore */}
                <View style={{ ...template.content, marginBottom: 5 }}>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>E-Commerce Platform</Text>
                  {/* @ts-ignore */}
                  <Link src="https://jachai.com" style={template.link}>
                    jachai.com
                  </Link>
                  {/* @ts-ignore */}
                  <Text>Tech Stack: NextJS, TailwindCss, Elastic Search</Text>
                  {/* @ts-ignore */}
                  <Text>Speciality: Hundred thousand of users</Text>
                </View>
                {/* @ts-ignore */}
                <View style={{ ...template.content, marginBottom: 5 }}>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>
                    Medical Innovative Software
                  </Text>
                  {/* @ts-ignore */}
                  <Link src="https://augmedix.com" style={template.link}>
                    augmedix.com
                  </Link>
                  {/* @ts-ignore */}
                  <Text>Tech Stack: Angular, Scss, Jasmine</Text>
                  {/* @ts-ignore */}
                  <Text>Speciality: Multi-national software</Text>
                </View>
                {/* @ts-ignore */}
                <View style={template.content}>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>Diversity</Text>
                  {/* @ts-ignore */}
                  <Link src="https://inavrianttelecom" style={template.link}>
                    invarianttele.com
                  </Link>
                  {/* @ts-ignore */}
                  <Text>
                    Tech Stack: React, Jekyll, Bootstrap, Firebase, Express
                  </Text>
                  {/* @ts-ignore */}
                  <Text>Speciality: Composite of softwares</Text>
                </View>
              </View>
            </View>
          </View>

          {/* @ts-ignore */}
          <View style={template.section}>
            {/* @ts-ignore */}
            <Title name="WORK EXPERIENCE" />
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            <View style={template.content}>
              {/* @ts-ignore */}
              <View style={template.row}>
                {/* @ts-ignore */}
                <View style={template.col1}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Augmedix</Text>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Jachai Ltd.</Text>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Invariant Telecom</Text>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    <Design />
                    <Design />
                    <Design />
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Software Engineer</Text>
                    {/* @ts-ignore */}
                    <Text>Duration: 03/01/2022 - Now</Text>
                    {/* @ts-ignore */}
                    <Text>Responsibility: Contribute, Develop, Unit Test</Text>
                  </View>
                  {/* @ts-ignore */}
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Software Engineer</Text>
                    {/* @ts-ignore */}
                    <Text>Duration: 28/08/2021 - 01/01/2022</Text>
                    {/* @ts-ignore */}
                    <Text>
                      Responsibility: Lead, Planning, Develop, Code Review
                    </Text>
                  </View>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Software Engineer</Text>
                    {/* @ts-ignore */}
                    <Text>Duration: 29/09/2019 - 13/08/2021</Text>
                    {/* @ts-ignore */}
                    <Text>Responsibility: Planning, Develop, Deploy</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* @ts-ignore */}
          <View style={template.section}>
            {/* @ts-ignore */}
            <Title name="ACADEMIC" />
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            <View style={template.content}>
              {/* @ts-ignore */}
              <View style={template.row}>
                {/* @ts-ignore */}
                <View style={template.col1}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>
                      Bachelor of Science (Engineering)
                    </Text>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>
                      Higher Secondary Certificate
                    </Text>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    <Design />
                    <Design />
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={{ ...template.content, marginBottom: 5 }}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>
                      Information & Communication Technoloy
                    </Text>
                    {/* @ts-ignore */}
                    <Text>Institution: Comilla University</Text>
                    {/* @ts-ignore */}
                    <Text>Result: 3.23 / 4.00</Text>
                    {/* @ts-ignore */}
                    <Text>Passing Time: 01/2019</Text>
                  </View>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>Science Group</Text>
                    {/* @ts-ignore */}
                    <Text>Institution: Sonar Bangla College</Text>
                    {/* @ts-ignore */}
                    <Text>Result: 5.00 / 5.00</Text>
                    {/* @ts-ignore */}
                    <Text>Passing Time: 03/2012</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* @ts-ignore */}
          <View style={{ ...template.section, marginTop: 10 }}>
            {/* @ts-ignore */}
            <View style={template.content}>
              {/* @ts-ignore */}
              <View style={template.row}>
                {/* @ts-ignore */}
                <View style={template.col1}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Text style={template.subtitle}>
                      {/* @ts-ignore */}
                      <Title name="PORTFOLIO" />
                    </Text>
                  </View>
                </View>

                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.content}>
                    {/* @ts-ignore */}
                    <Link src="https://yadab.me" style={template.link}>
                      https://yadab.me
                    </Link>
                  </View>
                </View>
                {/* @ts-ignore */}
                <View style={template.col}>
                  {/* @ts-ignore */}
                  <View style={template.content}></View>
                </View>
              </View>
            </View>
          </View>

          {/* @ts-ignore */}
          <View
            style={{ ...template.section, marginTop: "auto", marginBottom: 0 }}
          >
            {/* @ts-ignore */}
            {/* @ts-ignore */}
            <View style={template.row}>
              {/* @ts-ignore */}
              <View style={template.col}>
                {/* @ts-ignore */}
                <Title name="PROBLEM SOLVING" />
                {/* @ts-ignore */}
                <View style={template.content}>
                  {/* @ts-ignore */}
                  <Text style={template.subtitle}>
                    CoU CSE Fest - 2016 (4th)
                  </Text>
                  {/* @ts-ignore */}
                  <Text style={{ ...template.subtitle, marginBottom: 5 }}>
                    NCPC - 2017 (28th)
                  </Text>
                  {/* @ts-ignore */}
                  <Text>LeetCode: leetcode.com/yadabsd</Text>
                  {/* @ts-ignore */}
                  <Text>Codeforces</Text>
                  {/* @ts-ignore */}
                  <Text>TopCoder</Text>
                </View>
              </View>
              {/* @ts-ignore */}
              <View style={template.col}>
                {/* @ts-ignore */}
                <Title name="PERSONAL INFO" />
                {/* @ts-ignore */}
                <View
                  style={{ ...template.content, justifyContent: "flex-start" }}
                >
                  {/* @ts-ignore */}
                  <View style={template.row}>
                    {/* @ts-ignore */}
                    <View style={template.col}>
                      {/* @ts-ignore */}
                      <View style={template.content}>
                        {/* @ts-ignore */}
                        <Text>Date of Birth: </Text>
                        {/* @ts-ignore */}
                        <Text>NID: </Text>
                        {/* @ts-ignore */}
                        <Text>Gender: </Text>
                        {/* @ts-ignore */}
                        <Text>Nationality: </Text>
                        {/* @ts-ignore */}
                        <Text>Language Skill: </Text>
                      </View>
                    </View>
                    {/* @ts-ignore */}
                    <View style={template.col}>
                      {/* @ts-ignore */}
                      <View style={template.content}>
                        {/* @ts-ignore */}
                        <Text>25/05/1994</Text>
                        {/* @ts-ignore */}
                        <Text>19948509000021</Text>
                        {/* @ts-ignore */}
                        <Text>Male</Text>
                        {/* @ts-ignore */}
                        <Text>Bangladeshi</Text>
                        {/* @ts-ignore */}
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
