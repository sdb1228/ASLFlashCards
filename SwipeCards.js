// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <TouchableOpacity onPress={_ => this.props.onTouchCallback({text: this.props.text})}>
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
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

export default class CustomSwipeCards extends React.Component {
  static navigationOptions = {
    title: 'Flash Cards',
  }
  constructor(props) {
    super(props)
    this.state = {cards: Cards}
  }
  handleYup = (card) => {
    console.log(`Yup for ${card.text}`)
  }
  handleNope = (card) => {
    const Round2Cards = [
      {text: 'Aubergine', backgroundColor: 'purple'},
      {text: 'Courgette', backgroundColor: 'green'},
      {text: 'Blueberry', backgroundColor: 'blue'},
      {text: 'Umm...', backgroundColor: 'cyan'},
      {text: 'orange', backgroundColor: 'orange'},
    ]
    this.setState({cards: Round2Cards})
  }
  handleCardTouch = (card) => {
    const { navigate } = this.props.navigation;
    navigate('Video', { term: card.text })
  }
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card onTouchCallback={this.handleCardTouch} {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        onClickHandler={this.handleTouch}
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
