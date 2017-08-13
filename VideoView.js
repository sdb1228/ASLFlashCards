import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';
const aslVideos = {
"Good afternoon": require('./videos/goodafternoon.mp4'),
"Good morning": require('./videos/goodmorning.mp4'),
"Goodbye": require('./videos/bye.mp4'),
"Goodnight": require('./videos/goodnight.mp4'),
"Hello": require('./videos/hello.mp4'),
"How are you?": require('./videos/howareyou.mp4'),
"How are you? (2)": require('./videos/howareyou2.mp4'),
"My name is Deborah (name sign).": require('./videos/mynamedeborah.mp4'),
"Nice to meet you.": require('./videos/nicetomeetyou.mp4'),
"Thank you.": require('./videos/thankyou.mp4'),
"Thank you. (2)": require('./videos/thank-you.mp4'),
"What is your name?": require('./videos/whatyourname.mp4'),
"You’re welcome.": require('./videos/yourewelcome.mp4'),
"ASL Alphabet (A-Z)": require('./videos/Unit1_Alphabet.mp4'),
"BOY": require('./videos/boy.mp4'),
"DEAF": require('./videos/deaf.mp4'),
"GIRL": require('./videos/girl.mp4'),
"HEARING": require('./videos/hearing.mp4'),
"HOW": require('./videos/how.mp4'),
"HOW (2)": require('./videos/how2.mp4'),
"MAN": require('./videos/man.mp4'),
"MAN (2)": require('./videos/man2.mp4'),
"PLEASE": require('./videos/please.mp4'),
"STUDENT": require('./videos/student.mp4'),
"STUDENT (2)": require('./videos/student2.mp4'),
"TEACHER": require('./videos/teacher.mp4'),
"WHAT": require('./videos/what.mp4'),
"WHEN": require('./videos/when.mp4'),
"WHERE": require('./videos/where.mp4'),
"WHO": require('./videos/who.mp4'),
"WHY": require('./videos/why.mp4'),
"WOMAN": require('./videos/woman.mp4'),
"WOMAN (2)": require('./videos/woman2.mp4'),
"Can you (please) sign slower?": require('./videos/pleasesignslower.mp4'),
"Can you (please) sign that again?": require('./videos/pleasesignagain.mp4'),
"Can you fingerspell that again?": require('./videos/fingerspellagain.mp4'),
"Excuse me": require('./videos/excuseme.mp4'),
"I don’t understand.": require('./videos/idontunderstand.mp4'),
"I’ll be right back.": require('./videos/ibrb.mp4'),
"Sorry.": require('./videos/sorry.mp4'),
"There is no sign for that, you need to fingerspell it.": require('./videos/nosignforthatmustfingerspell.mp4'),
"What did you/they say?": require('./videos/whatsay.mp4'),
"What does that mean?": require('./videos/whatdoesthatmean.mp4'),
"Write it please.": require('./videos/pleasewrite.mp4'),
"AGAIN": require('./videos/again.mp4'),
"APPLE": require('./videos/apple-2.mp4'),
"APPLE (2)": require('./videos/apple.mp4'),
"BALL": require('./videos/ball.mp4'),
"BOOK": require('./videos/book.mp4'),
"BREAD": require('./videos/bread.mp4'),
"CANDY": require('./videos/candy.mp4'),
"COKE (Coca Cola)": require('./videos/coke-2.mp4'),
"DRAW": require('./videos/draw.mp4'),
"DRINK": require('./videos/drink.mp4'),
"EAT": require('./videos/eat.mp4'),
"FOOD": require('./videos/food.mp4'),
"GRAPES": require('./videos/grapes.mp4'),
"ICE CREAM": require('./videos/ice-cream.mp4'),
"KEY": require('./videos/key.mp4'),
"LOCK": require('./videos/lock.mp4'),
"MILK": require('./videos/milk.mp4'),
"MORE": require('./videos/more.mp4'),
"Numbers 1-10": require('./videos/Unit2_Numbers_1-10.mp4'),
"PAPER": require('./videos/paper.mp4'),
"PIZZA": require('./videos/pizza.mp4'),
"PIZZA (2)": require('./videos/pizza-2.mp4'),
"SENTENCE": require('./videos/sentence.mp4'),
"SIGN": require('./videos/sign.mp4'),
"SODA-POP": require('./videos/soda-pop.mp4'),
"WANT": require('./videos/want.mp4'),
"WANT (2)": require('./videos/want-2.mp4'),
"WATER": require('./videos/water.mp4'),
"WRITE": require('./videos/write.mp4'),
"Are you a student?": require('./videos/areyouastudent.mp4'),
"Are you deaf?": require('./videos/areyoudeaf.mp4'),
"Are you learning sign language?": require('./videos/youlearnsign.mp4'),
"No, I’m not deaf, I’m hearing.": require('./videos/noimnotdeafimhearing.mp4'),
"What is your teacher’s name?": require('./videos/whatsyourteachersname.mp4'),
"Where are you learning sign language?": require('./videos/whereyoulearnsign.mp4'),
"Who is your teacher?": require('./videos/whoisyourteacher.mp4'),
"Why are you learning sign language?": require('./videos/whyyoulearnsign.mp4'),
"You sign very fluently.": require('./videos/yousignveryfluent.mp4'),
"ALGEBRA": require('./videos/algebra.mp4'),
"ALWAYS": require('./videos/always.mp4'),
"ART": require('./videos/art.mp4'),
"ASL": require('./videos/asl.mp4'),
"BAND": require('./videos/band.mp4'),
"BIOLOGY": require('./videos/biology.mp4'),
"CHEMISTRY": require('./videos/chemistry.mp4'),
"CHOIR": require('./videos/choir.mp4'),
"COLLEGE": require('./videos/college.mp4'),
"COOK": require('./videos/cook.mp4'),
"DRAMA": require('./videos/drama.mp4'),
"ELEMENTARY": require('./videos/elementary-school.mp4'),
"ENGLISH": require('./videos/english.mp4'),
"GET-UP": require('./videos/get-up.mp4'),
"HEALTH": require('./videos/health.mp4'),
"HIGH-SCHOOL": require('./videos/highschool.mp4'),
"HISTORY": require('./videos/history.mp4'),
"JUNIOR-HIGH-SCHOOL": require('./videos/junior-high-school.mp4'),
"KNOW": require('./videos/know.mp4'),
"LEARN": require('./videos/learn.mp4'),
"MAJOR (in college)": require('./videos/major.mp4'),
"MARTIAL ARTS": require('./videos/martial-arts.mp4'),
"MATH": require('./videos/math.mp4'),
"MIDDLE SCHOOL": require('./videos/middle-school.mp4'),
"MOON": require('./videos/moon.mp4'),
"MOST": require('./videos/most.mp4'),
"NEED": require('./videos/need.mp4'),
"NEVER": require('./videos/never.mp4'),
"NO": require('./videos/no.mp4'),
"PHOTOGRAPHY": require('./videos/photography.mp4'),
"PHYSICS": require('./videos/physics.mp4'),
"PLAY": require('./videos/play.mp4'),
"POETRY": require('./videos/poetry.mp4'),
"PSYCHOLOGY": require('./videos/psychology.mp4'),
"SCHOOL": require('./videos/school.mp4'),
"SCIENCE": require('./videos/science.mp4'),
"SEASON": require('./videos/season.mp4'),
"SIGN LANGUAGE": require('./videos/sign-language.mp4'),
"SKULPTING/CERAMICS": require('./videos/skulpting-ceramics.mp4'),
"SLEEP": require('./videos/sleep.mp4'),
"SPORTS": require('./videos/sports.mp4'),
"SUN": require('./videos/sun.mp4'),
"THIRSTY": require('./videos/thirsty.mp4'),
"UNIVERSITY": require('./videos/university.mp4'),
"WAKE-UP": require('./videos/wake-up.mp4'),
"WARM": require('./videos/warm.mp4'),
"WEATHER": require('./videos/weather.mp4'),
"WORK": require('./videos/work.mp4'),
"YES": require('./videos/yes.mp4'),
}

export default class VideoView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.term,
  })
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
  };

  onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }

  renderSkinControl(skin) {
    const isSelected = this.state.skin == skin;
    const selectControls = skin == 'native' || skin == 'embed';
    return (
      <TouchableOpacity onPress={() => { this.setState({
          controls: selectControls,
          skin: skin
        }) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);

    return (
      <TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    )
  }

  renderCustomSkin() {
    const term = this.props.navigation.state.params.term;
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video
            source={aslVideos[term]}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            repeat={true}
          />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.1)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>
            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
              <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderNativeSkin() {
    const term = this.props.navigation.state.params.term;
    const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <Video
            source={aslVideos[term]}
            style={videoStyle}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat={true}
            controls={this.state.controls}
          />
        </View>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            {
              (Platform.OS === 'ios') ?
                <View style={styles.ignoreSilentSwitchControl}>
                  {this.renderIgnoreSilentSwitchControl('ignore')}
                  {this.renderIgnoreSilentSwitchControl('obey')}
                </View> : null
            }
          </View>
        </View>

      </View>
    );
  }

  render() {
    return this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

AppRegistry.registerComponent('ASLFlashCards', () => ASLFlashCards);
