import React, { useState } from 'react';
import { DataTable } from 'react-native-paper';
import HeaderSection from './Header';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  Card,
} from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Header from './Header';

const emotion_color = {
  Bored: '#B6CEC7',
  Angry: '#D5A6E6',
  Sad: '#ACACAC',
  Fear: '#F5AE92',
  Happy: '#FFA4B6',
  Excited: '#FF8B3D',
};

export default function LookTable(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>

          <Text style={{ textAlign: 'center' }}>Color theory is both the science and art of using color. It explains how humans perceive color; and the visual effects of how colors mix, match or contrast with each other. Color theory also involves the messages colors communicate; and the methods used to replicate color.</Text>


          <TableView appearance="light">
            <Section header="Look At Emotion Mapping with colors here!">
             
              <Cell
                cellStyle="RightDetail"
                title="NEUTRAL"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#FFFAEC"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>
                    Neutrals such as beige, ivory, taupe, black, gray and shades of white appear to be without color, but in many applications these hues often have undertones. Neutral news are generally unbiased news.
                  </Text>
                </View>
              </Collapsible>

              <Cell
                cellStyle="RightDetail"
                title="CONTROVERSIAL"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#D5A6E6"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>Purple refers to any of a variety of colors with hue between red and blue. Purple is closely associated with violet. In optics, purple and violet refer to colors that look similar, but purples are mixtures of red light and blue or violet light, whereas violets are spectral colors (of single wavelengths of light).</Text>
                </View>
              </Collapsible>

              <Cell
                cellStyle="RightDetail"
                title="SAD"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#ACACAC"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>From a color psychology perspective, gray is the color of compromise - being neither black nor white, it is the transition between two non-colors. The closer gray gets to black, the more dramatic and mysterious it becomes. The closer it gets to silver or white, the more illuminating and lively it becomes.

Being both motionless and emotionless, gray is solid and stable, creating a sense of calm and composure, relief from a chaotic world.</Text>
                </View>
              </Collapsible>

              <Cell
                cellStyle="RightDetail"
                title="TENSE"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#F5AE92"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>A tense situation or period of time is one that makes people anxious, because they do not know what is going to happen next.</Text>
                </View>
              </Collapsible>

              <Cell
                cellStyle="RightDetail"
                title="HAPPY"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#FFA4B6"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>Happiness is an emotional state characterized by feelings of joy, satisfaction, contentment, and fulfillment. While happiness has many different definitions, it is often described as involving positive emotions and life satisfaction. </Text>
                </View>
              </Collapsible>

              <Cell
                cellStyle="RightDetail"
                title="OPTIMISTIC"
                accessory="DetailDisclosure"
                accessoryColor="black"
                backgroundColor="#FF8B3D"
                onPress={toggleExpanded}
              />
              <Collapsible collapsed={collapsed} align="center">
                <View style={styles.content}>
                  <Text style={{ textAlign: 'center' }}>Being optimistic, in the typical sense of the word, is defined as expecting the best possible outcome from any given situation. This is usually referred to in psychology as dispositional optimism. It thus reflects a belief that future conditions will work out for the best.</Text>
                </View>
              </Collapsible>
            </Section>
          </TableView>
        </ScrollView>
      </View>
      <View>
        <TableView>
            <Section footer="All rights reserved.">
              <Cell
                title="Help / FAQ"
                titleTextColor="#007AFF"
                onPress={() => console.log('open Help/FAQ')}
              />
              <Cell
                title="Contact Us"
                titleTextColor="#007AFF"
                onPress={() => console.log('open Contact Us')}
              />
            </Section>
        </TableView>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },

  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});
