import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/hooks'
import { setWorkoutNameUserInput } from '../../redux/states/workoutSlice'

const Wrapper = ({ elements }: any) => {
  return <View style={{ top: '70%', height: '100%', backgroundColor: '#fff' }}>{elements}</View>
}

const CreateWorkoutModal = ({ CreateUpdateWorkout, setCreateWorkoutPopup }: any) => {
  const workoutNameUserInput = useAppSelector((state) => state.workout.workoutNameUserInput)
  const dispatch = useDispatch()

  const saveFunction = () => {
    CreateUpdateWorkout()
    dispatch(setWorkoutNameUserInput(''))
    setCreateWorkoutPopup(false)
  }

  return (
    <>
      <Modal transparent animationType='slide'>
        <Pressable style={styles.backdrop} onPress={() => setCreateWorkoutPopup(false)}>
          <Wrapper
            elements={
              <>
                <Text style={styles.title}>Your Workout Name</Text>
                <View style={{ marginVertical: 25 }}>
                  <TextInput
                    placeholder='Workout Name...'
                    placeholderTextColor="#bbb"
                    value={workoutNameUserInput}
                    onChangeText={(txt) => dispatch(setWorkoutNameUserInput(txt))}
                    style={styles.workoutNameInput}
                  />
                </View>
                <TouchableOpacity style={styles.saveWorkoutBtn} onPress={() => saveFunction()}>
                  <Text style={styles.saveWorkoutBtnText}>Save Workout</Text>
                </TouchableOpacity>
              </>
            }
          />
        </Pressable>
      </Modal>
    </>
  )
}

export default CreateWorkoutModal

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#00000033',
  },
  saveWorkoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#92A3FD',
    marginHorizontal: 40,
    height: 50,
    borderRadius: 20,
  },
  saveWorkoutBtnText: {
    color: '#fff',
    fontFamily: 'Poppins_Bold',
    textAlignVertical: 'center',
    fontSize: 14,
  },
  title: {
    color: '#777',
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  workoutNameInput: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    borderWidth: 1,
    backgroundColor: '#F8F9F9',
    borderColor: '#ccc',
    color: '#777',
    marginHorizontal: 40,
    borderRadius: 16,
    height: 50,
  },
})
