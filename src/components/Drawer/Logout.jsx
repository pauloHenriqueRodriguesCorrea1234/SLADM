import { TouchOpacity, StyleSheet } from "react-native"

const Logout = () => {
    return(
        <TouchOpacity style={styles.conteiner}>
            <Text style={styles.text}>Logout</Text>
        </TouchOpacity>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
    }
})

export default Logout;