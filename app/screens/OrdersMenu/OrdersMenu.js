import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

const width = Dimensions.get('window').width;
        
export default class OrdersScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            /* set header title*/
            title: 'Orders',
            headerLeft: (
                <View style={{ padding: 20}}>
                    <Icon 
                        name='menu'
                        color='white'
                        underlayColor='#C0CCDA'
                        size={30}
                        onPress={() => navigation.navigate('Home')}/>
                </View>
            ),
        };
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Grid>
                        <Col style={{ width: width * 0.5 }}>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('ColeopteraAdult')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./coleoptera-adult.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Coleoptera</Text>
                                    <Text style={styles.comname}>"Adult Beetles"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Diptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./diptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Diptera</Text>
                                    <Text style={styles.comname}>"True Flies"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Hemiptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./hemiptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Hemiptera</Text>
                                    <Text style={styles.comname}>"True Bugs"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Megaloptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./megaloptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Megaloptera</Text>
                                    <Text style={styles.comname}>"Alderflies, Dobsonflies, and Fishflies"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Plecoptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./plecoptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Plecoptera</Text>
                                    <Text style={styles.comname}>"Stoneflies"</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>

                        <Col style={{ width: width * 0.5 }}>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('ColeopteraLarva')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./coleoptera-larva.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Coleoptera</Text>
                                    <Text style={styles.comname}>"Larval Beetles"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    onPress={() => navigate('Ephemeroptera')}>
                                    <Image
                                        style={styles.image}
                                        source={require('./ephemeroptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Ephemeroptera</Text>
                                    <Text style={styles.comname}>"Mayflies"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Lepidoptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./lepidoptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Lepidoptera</Text>
                                    <Text style={styles.comname}>"Aquatic Caterpillars, Snout Moths"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Odonata')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./odonata.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Odonata</Text>
                                    <Text style={styles.comname}>"Damselflies and Dragonflies"</Text>
                                </TouchableOpacity>
                            </Row>
                            <Row style={styles.row}>
                                <TouchableOpacity
                                    style={styles.griditem}
                                    /* onPress={() => navigate('Trichoptera')}*/>
                                    <Image
                                        style={styles.image}
                                        source={require('./trichoptera.png')}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.sciname}>Trichoptera</Text>
                                    <Text style={styles.comname}>"Caddisflies"</Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    griditem: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
    },
    row: {
        height: 250,
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        flex: .95,
        height: undefined,
        width: undefined,
        alignSelf: 'stretch',
    },
    sciname: {
        fontSize: 25,
        fontFamily: 'RobotoSlab-Regular',
        textAlign: 'center',
    },
    comname: {
        fontSize: 25,
        fontFamily: 'CormorantGaramond-Italic',
        textAlign: 'center',
        color: 'gray',
    },
});