import {useState} from 'react';
import {
        View,
        Text,
        TextInput,
        FlatList,
        TouchableOpacity,
        StyleSheet

} from 'react-native';

function App(){
  const [number1, setnumber1] = useState('');
  const [number2, setnumber2] = useState('');
  const [ans, setAnswer] = useState('');


  const handleAddTask = () => {
    if (Number(number1) !='' && Number(number2) !=''){
      let ans = 0;
      ans = Number(number1) + Number(number2);
      setAnswer(ans); } else {
        setAnswer('Input both numbers')
      }};


  const handleMinusTask = () => {
    if (Number(number1) !='' && Number(number2) !=''){
      let ans = 0;
      ans = Number(number1) - Number(number2);
      setAnswer(ans); }else{
        setAnswer('Input both numbers')
      }};

  const handleMultiplyTask = () => {
    if (Number(number1) !='' && Number(number2) !=''){
      let ans = 0;
      ans = Number(number1) * Number(number2);
      setAnswer(ans); }else{
        setAnswer('Input both numbers')
      }};

  const handleDivisionTask = () => {
        if (Number(number2) != 0){
            let result = Number(number1) / Number(number2);
            setAnswer(result.toString())}
            else{
                setAnswer('Error! Division by zero')}}


  const handlePowerTask = () => {
      let ans = 0;
      ans = Number(number1) ** Number(number2);
      setAnswer(ans); };


  const handleSquareRootTask = () => {
      let ans = 0;
      ans =  Math.sqrt( Number(number1));
      setAnswer(ans); };


        return(
        <View style={styles.container}>
              <Text style={styles.heading}>Calculator</Text>
              <View style={styles.inputContainer}>
                    <TextInput 
                            style={styles.input}
                            placeholder="0"
                            value={number1}
                            onChangeText={(number1) => setnumber1(number1)} />    
              </View>

              <View style={styles.inputContainer}>
                    <TextInput 
                            style={styles.input}
                            placeholder="0"
                            value={number2}
                            onChangeText={(number2) => setnumber2(number2)} />    
              </View>

              < View style={styles.horizontalLayout}>
                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handleAddTask}>
                            <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handleMinusTask}
                    >
                            <Text style={styles.addButtonText}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handleMultiplyTask}
                    >
                            <Text style={styles.addButtonText}>*</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handleDivisionTask}
                    >
                            <Text style={styles.addButtonText}>/</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handlePowerTask}
                    >
                            <Text style={styles.addButtonText}> ^ </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                            style={styles.addButton}
                            onPress={handleSquareRootTask}
                    >
                            <Text style={styles.addButtonText}> √ </Text>
                    </TouchableOpacity>

              </View>

              <View style={styles.answerContainer}>
                      <Text placeholder="0">
                            {ans}
                      </Text>
                             
              </View>

        </View>
        );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },

      answerContainer: {
            marginTop: 20,
            fontSize: 24,
            height: 30,
      },

      horizontalLayout: {
      flexDirection: 'row', 
      justifyContent: 'space-evenly', 
      marginTop: 20, 
      },

      heading: {
        fontSize: 24,
        marginBottom: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
      },
      input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
      },
      addButton: {
        width: 40,
        height: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
      },
      addButtonText: {
        fontSize: 24,
        color: '#fff',
      },
});

export default App;