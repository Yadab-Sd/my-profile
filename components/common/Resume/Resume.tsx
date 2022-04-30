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
} from "@react-pdf/renderer";

Font.register({
  family: "Blinker",
  src: Blinker,
  fonts: [
    {
      src: Blinker,
      fontWeight: "normal",
    },
    {
      src: BlinkerBold,
      fontWeight: "bold",
    },
    {
      src: BlinkerLight,
      fontWeight: "light",
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
  },
  title: {
    fontSize: 12,
    color: "#00bcd4",
    textTransform: "uppercase",
    display: "flex",
    marginBottom: 5,
    fontWeight: "bold",
    position: "relative",
    "&::after": {
      content: "",
      left: 0,
      position: "absolute",
      width: 300,
      height: 200,
      background: 'red'
    },
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 500,
    color: "black",
    textTransform: "capitalize",
  },
  para: {},
  link: {
    color: "#808080",
  },
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    fontSize: 9,
    color: "#808080",
    lineHeight: 1.4,
    fontFamily: "Blinker",
    fontWeight: "normal",
  },
  sectionLeft: {
    backgroundColor: "#f1f1f1",
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
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
    color: "#607d8b",
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
    backgroundColor: "#a0a5aa",
    flexGrow: 1,
    color: "white",
    padding: 20,
  },
  darkTitle: {
    ...template.title,
    color: "white",
  },
  textRed: {
    color: "#cd113b",
  },
});

export const Resume: any = () => {
  return (
    <Document title="Resume">
      {/* @ts-ignore */}
      <Page wrap={false} size="A4" style={styles.page}>
        {/* @ts-ignore */}
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
            {console.log(1, Font.getRegisteredFonts())}
            <View style={styles.contact}>
              <Text style={styles.contactTitle}>CONTACT</Text>
              {/* @ts-ignore */}
              <View style={template.content}>
                <Text>+8801733267990</Text>
                <Text>yadab.sd2013@gmail.com</Text>
                {/* <Link src="https://yadab.me" style={template.link}>
                  yadab.me
                </Link> */}
                <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
              </View>
            </View>
          </View>
          <View style={styles.leftDarkSection}>
            <View style={template.section}>
              <Text style={styles.darkTitle}>SKILLS</Text>
              {/* @ts-ignore */}
              <View style={template.content}>
                <Text>+8801733267990</Text>
                <Text>yadab.sd2013@gmail.com</Text>
                <Text>yadab.me</Text>
                <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
              </View>
            </View>
            <View style={template.section}>
              <Text style={styles.darkTitle}>CERTIFICATION</Text>
              {/* @ts-ignore */}
              <View style={template.content}>
                <Text>+8801733267990</Text>
                <Text>yadab.sd2013@gmail.com</Text>
                <Text>yadab.me</Text>
                <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
              </View>
            </View>
            <View style={template.section}>
              <Text style={styles.darkTitle}>MY NUMBERS</Text>
              {/* @ts-ignore */}
              <View style={template.content}>
                <Text>+8801733267990</Text>
                <Text>yadab.sd2013@gmail.com</Text>
                <Text>yadab.me</Text>
                <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
              </View>
            </View>
            <View style={template.section}>
              <Text style={styles.darkTitle}>PERSONAL INTERESTS</Text>
              {/* @ts-ignore */}
              <View style={template.content}>
                <Text>+8801733267990</Text>
                <Text>yadab.sd2013@gmail.com</Text>
                <Text>yadab.me</Text>
                <Text>A-61/2, Khilkhet, Dhaka-1229, Bangladesh</Text>
              </View>
            </View>
          </View>
        </View>
        {/* @ts-ignore */}
        <View style={styles.sectionRight}>
          <View style={template.section}>
            <Text style={template.title}>ABOUT ME</Text>
            {/* @ts-ignore */}
            <View style={template.content}>
              <Text style={template.para}>
                Using a browser to open the file, the page should render the
                text, “Making the Web Beautiful”, in the Crimson Pro font. .
                Using a browser to open the file, the page should render the
                text, “Making the Web Beautiful”, in the Crimson Pro font. Using
                a browser to open the file, the page should render the text,
                “Making the Web Beautiful”, in the Crimson Pro font. . Using a
                browser to open the file, the page should render the text,
                “Making the Web Beautiful”, in the Crimson Pro font.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default React.memo(Resume);
