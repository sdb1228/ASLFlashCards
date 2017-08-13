// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
const colors = [
 'red',
  'purple',
  'green',
  'blue',
  'cyan',
  'orange',
]

let Card = React.createClass({
  render() {
    return (
      <TouchableOpacity onPress={_ => this.props.onTouchCallback({text: this.props.text, uri: this.props.uri})}>
        <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
})

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}
const Cards = [
  {text: "Good afternoon", uri: "goodafternoon.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Good morning", uri: "goodmorning.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Goodbye", uri: "bye.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Goodnight", uri: "goodnight.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Hello", uri: "hello.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "How are you?", uri: "howareyou.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "How are you? (2)", uri: "howareyou2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "My name is Deborah (name sign).", uri: "mynamedeborah.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Nice to meet you.", uri: "nicetomeetyou.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Thank you.", uri: "thankyou.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Thank you. (2)", uri: "thank-you.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "What is your name?", uri: "whatyourname.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "You’re welcome.", uri: "yourewelcome.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ASL Alphabet (A-Z)", uri: "lesson-videos/Unit1_Alphabet.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BOY", uri: "boy.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "DEAF", uri: "deaf.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "GIRL", uri: "girl.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HEARING", uri: "hearing.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HOW", uri: "how.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HOW (2)", uri: "how2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MAN", uri: "man.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MAN (2)", uri: "man2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PLEASE", uri: "please.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "STUDENT", uri: "student.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "STUDENT (2)", uri: "student2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "TEACHER", uri: "teacher.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WHAT", uri: "what.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WHEN", uri: "when.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WHERE", uri: "where.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WHO", uri: "who.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WHY", uri: "why.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WOMAN", uri: "woman.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WOMAN (2)", uri: "woman2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Can you (please) sign slower?", uri: "pleasesignslower.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Can you (please) sign that again?", uri: "pleasesignagain.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Can you fingerspell that again?", uri: "fingerspellagain.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Excuse me", uri: "excuseme.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "I don’t understand.", uri: "idontunderstand.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "I’ll be right back.", uri: "ibrb.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Sorry.", uri: "sorry.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "There is no sign for that, you need to fingerspell it.", uri: "nosignforthatmustfingerspell.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "What did you/they say?", uri: "whatsay.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "What does that mean?", uri: "whatdoesthatmean.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Write it please.", uri: "pleasewrite.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "AGAIN", uri: "again.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "APPLE", uri: "apple-2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "APPLE (2)", uri: "apple.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BALL", uri: "ball.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BOOK", uri: "book.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BREAD", uri: "bread.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "CANDY", uri: "candy.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "COKE (Coca Cola)", uri: "coke-2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "DRAW", uri: "draw.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "DRINK", uri: "drink.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "EAT", uri: "eat.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "FOOD", uri: "food.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "GRAPES", uri: "grapes.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ICE CREAM", uri: "ice-cream.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "KEY", uri: "key.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "LOCK", uri: "lock.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MILK", uri: "milk.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MORE", uri: "more.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Numbers 1-10", uri: "lesson-videos/Unit2_Numbers_1-10.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PAPER", uri: "paper.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PIZZA", uri: "pizza.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PIZZA (2)", uri: "pizza-2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SENTENCE", uri: "sentence.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SIGN", uri: "sign.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SODA-POP", uri: "soda-pop.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WANT", uri: "want.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WANT (2)", uri: "want-2.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WATER", uri: "water.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WRITE", uri: "write.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Are you a student?", uri: "areyouastudent.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Are you deaf?", uri: "areyoudeaf.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Are you learning sign language?", uri: "youlearnsign.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "No, I’m not deaf, I’m hearing.", uri: "noimnotdeafimhearing.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "What is your teacher’s name?", uri: "whatsyourteachersname.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Where are you learning sign language?", uri: "whereyoulearnsign.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Who is your teacher?", uri: "whoisyourteacher.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "Why are you learning sign language?", uri: "whyyoulearnsign.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "You sign very fluently.", uri: "yousignveryfluent.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ALGEBRA", uri: "algebra.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ALWAYS", uri: "always.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ART", uri: "art.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ASL", uri: "asl.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BAND", uri: "band.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "BIOLOGY", uri: "biology.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "CHEMISTRY", uri: "chemistry.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "CHOIR", uri: "choir.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "COLLEGE", uri: "college.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "COOK", uri: "cook.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "DRAMA", uri: "drama.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ELEMENTARY", uri: "elementary-school.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "ENGLISH", uri: "english.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "GET-UP", uri: "get-up.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HEALTH", uri: "health.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HIGH-SCHOOL", uri: "highschool.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "HISTORY", uri: "history.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "JUNIOR-HIGH-SCHOOL", uri: "junior-high-school.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "KNOW", uri: "know.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "LEARN", uri: "learn.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MAJOR (in college)", uri: "major.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MARTIAL ARTS", uri: "martial-arts.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MATH", uri: "math.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MIDDLE SCHOOL", uri: "middle-school.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MOON", uri: "moon.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "MOST", uri: "most.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "NEED", uri: "need.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "NEVER", uri: "never.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "NO", uri: "no.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PHOTOGRAPHY", uri: "photography.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PHYSICS", uri: "physics.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PLAY", uri: "play.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "POETRY", uri: "poetry.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "PSYCHOLOGY", uri: "psychology.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SCHOOL", uri: "school.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SCIENCE", uri: "science.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SEASON", uri: "season.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SIGN LANGUAGE", uri: "sign-language.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SKULPTING/CERAMICS", uri: "skulpting-ceramics.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SLEEP", uri: "sleep.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SPORTS", uri: "sports.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "SUN", uri: "sun.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "THIRSTY", uri: "thirsty.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "UNIVERSITY", uri: "university.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WAKE-UP", uri: "wake-up.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WARM", uri: "warm.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WEATHER", uri: "weather.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "WORK", uri: "work.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
  {text: "YES", uri: "yes.mp4", backgroundColor: colors[Math.floor(Math.random() * colors.length)]},
]

export default class CustomSwipeCards extends React.Component {
  static navigationOptions = {
    title: 'Flash Cards',
  }
  constructor(props) {
    super(props)
    this.state = {cards: this.shuffle(Cards)}
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleYup = (card) => {
    let newCards = this.state.cards.filter(function( obj ) {
        return obj.text !== card.text;
    });
    this.setState({cards: newCards})
  }
  handleNope = (card) => {
    let nopedObject = this.state.cards.filter(function( obj ) {
        return obj.text === card.text;
    })[0];
    let newCards = this.state.cards.filter(function( obj ) {
        return obj.text !== card.text;
    });
    newCards.push(nopedObject)
    this.setState({cards: newCards})
  }
  handleCardTouch = (card) => {
    const { navigate } = this.props.navigation;
    navigate('Video', { term: card.text, uri: card.uri })
  }
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card onTouchCallback={this.handleCardTouch} {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        onClickHandler={this.handleCardTouch}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        loop
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})
