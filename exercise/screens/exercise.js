import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

export default function ExerciseScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.head}>6 ท่าออกกำลังกายลดพุง</Text>

                <View style={styles.textContainer}>
                <Image source={require('../assets/plank.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                        Plank to Pushup 
                    </Text>
                    <Text style={styles.textContent}>
                        ทำ 10-12 ครั้ง 2-3 เชต
                        ท่านี้เป็นการผสมกันระหว่างการ Plank และ การดันพื้น โดนเริ่มที่ Plank แบบตั้งศอกราบกับพื้น ตั้งตัวตรง ก้นไม่โด่ง หลังไม่แอ่นไม่งอ จะรู้สึกเกร็งที่แกนกลางลำตัว จากนั้นดึงข้อศอกตั้งฉากกับพื้นที่ละข้าง และดันตัวขึ้น ยืดแขนให้หัวไหลตั้งฉากกับพื้นจนขึ้นมาสู่ท่าเตรียมดันพื้น โดยงอแขนเล็กน้อยอย่าให้ตึงหรือกระตุกข้อศอก จากนั้นทำลักษณะเดิมกับท่าตอนลงโดย ยุบข้อศอกลงว างราบกับพื้นทีละข้างจนเข้าสู่ท่าเริ่มต้น ขณะทำอย่ากลั้นหายใจ หายใจเข้า-ออกปรกติ จังหวะออกแรงดันให้หายใจออก
                    </Text>
                </View>

                <View style={styles.textContainer}>
                <Image source={require('../assets/obliques.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                        Oblique Twists 
                    </Text>
                    <Text style={styles.textContent}>
                        10-12 ครั้ง 2-3 เชต
                        ท่านี้เป็นท่าในกลุ่ม Plank เช่นกัน แต่จะเน้นการออกแรงที่ด้านข้างลำตัว เอว สะโพก โดยเริ่มต้นที่ท่า Side plank เอามือแตะใบหู ตั้งตัวตรง ไม่งอไม่แอ่นหลัง (สำหรับมือใหม่ให้วางเข่าลงบนพื้นได้ หรือจะยกตัวค้างไว้แล้วจับเวลาก็ได้) จากนั้นค่อยๆบิดตัวให้ปลายศอกชี้ลงพื้น จากนั้นบิดตัวกลับพร้อมเหยีดแขนขึ้น พับศอกวางมือแตะที่ใบหู สู่ท่าเริ่มต้น นับเป็นหนึ่งครั้ง ขณะทำอย่ากลั้นหายใจ หายใจเข้า-ออกปรกติ
                    </Text>
                </View>


                <View style={styles.textContainer}>
                <Image source={require('../assets/situp.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                    Sit-ups  
                    </Text>
                    <Text style={styles.textContent}>
                    12-15 ครั้ง 2-3 เชต
                     ท่าเบสิกพื้นฐานที่ใครๆก็รู้จัก ความหนัก ความเกร็งของท่านี้สามารถเพิ่มได้ตามระยะของการวางเท้าและจังหว่ะการยกตัว เริ่มต้นที่ท่านอนหงายตั้ง เข่าขึ้น (สำหรับมือใหม่อาจให้คนอื่นช่วยจับปลายเท้าหรือขัดกับสิ่งของหนักๆจะทำให้ง่ายขึ้น) วางมือแตะที่ใบหูไม่ช้อนไม่ดึงต้นคอและท้ายทอย เพราะจะทำให้ปวดคอได้ ยกตัวขึ้น โดยให้หลังส่วนล่างยังสัมผัสพื้นอยู่ พยายามจัดหลังให้เป็นแนวตรง เมื่อถึงจุดที่รู้สึกเกร็งท้องให้หยุด แล้วค่อยนอนลงคลายท่าลง ช้าๆ พยายามทำช้าๆ อย่าขี้โกงโดยการเล่นเร็วหรือทิ้งตัวเร็ว และขณะทำอย่ากลั้นหายใจ ให้หายใจเข้า-ออกปรกติ โดยหายใจเข้าตอนที่นอนลง และเป่าลมออกขณะที่ยกตัวขึ้น
                    </Text>
                </View>

                
                <View style={styles.textContainer}>
                <Image source={require('../assets/bicycle.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                    Bicycle Crunch   
                    </Text>
                    <Text style={styles.textContent}>
                    12-15 ครั้ง 2-3 เชต
                   เป็นท่าในกลุ่ม Crunch ที่ให้ผลกับท้องและข้างลำตัว โดยเริ่มต้นที่ท่านอนหงาย มือแตะใบหูไม่ช้อนคอหรือท้ายทอย พับขาข้างขวาพร้อมเหยีดขาข้างซ้ายออก ในขณะเดียวกันกับที่ยกลำตัวส่วนบนขึ้น จากนั้นบิดตัวให้ศอกด้านตรงข้ามกับขาที่งออยู่ดึงเข้าหากัน ทำสลับซ้าย-ขวา นับเป็นหนึ่ง ขณะทำอย่ากลั้นหายใจ หายใจเข้า-ออกปรกติ
                    </Text>
                </View>

                <View style={styles.textContainer}>
                <Image source={require('../assets/v_situp.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                    V Sit Up   
                    </Text>
                    <Text style={styles.textContent}>
                   12-15 ครั้ง 2-3 เชต
                       ท่านี้เป็นการผสมระหว่าง V sit กับ การ Sit up โดยเริ่มต้นที่การนอนหงาย มือแตะใบหูไม่ช้อนลำคอและท้ายทอย จากนั้นยกลำตัวส่วนบนขึ้นพร้อมกับดึงเข่าทั้งสองข้างเข้าหาหน้าอก แล้วค่อยๆเหยียดขาออกเป็นแนวตรงรูปตัววี เกร็งไว้ครู่นึง แล้วคลายท่ากลับสู่ท่านอนหงายจะนับเป็นหนึ่งครั้งทำช้าๆเนิบๆจะได้ผลดีกว่า ขณะทำอย่ากลั้นหายใจ หายใจเข้า-ออกปรกติ สำหรับมือใหม่ให้วางมือลงที่พื้นด้านหลังลำตัวเล็กน้อย แล้วทำตามขั้นตอนเหมือนด้านบน
                    </Text>
                </View>

                <View style={styles.textContainer}>
                <Image source={require('../assets/moutain.jpg')}
                  style={{ width:300, height:250, margin:20, borderRadius:15 }}/>
                    <Text style={styles.textTitle}>
                    Mountain Climbers   
                    </Text>
                    <Text style={styles.textContent}>
                    12-15 ครั้ง 2-3 เชต
                   สำหรับท่านนี้เป็นท่าในกลุ่มการบริหารแกนกลางลำตัว ถ้าหากต้องการให้ท่ามีความหนักขึ้นให้ใช้การจับเวลาเป็นเซต เซตละประมาณ 30 วินาที โดยทำเร็วและต่อเนื่อง เพิ่มความเร็วในการสลับขาไปมา ถ้าต้องการเน้นที่กล้ามเนื้อจะต้องเกร็งตัวให้อยู่ในแนวตรงดึงเข่าให้ใกล้หน้าอกมากที่สุด ไม่งอหลังก้นไม่โด่ง ศอกไม่ตึง งอแขนเล็กน้อย เริ่มต้นที่ท่าเตรียมดันพื้น จากนั้นดึงเข้าเข้าหาหน้าอก สลับซ้าย-ขวา นับเป็นหนึ่งครั้ง สำหรับมือใหม่อาจช่วยลดความยากโดยวางมือบนเสต็ป หรือ แทนที่สูงกว่าพื้นก็ได้
                    </Text>
                </View>





            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    head: {
        fontSize:27,
        fontWeight: '800',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        width: '90%',
        padding: 10,
        marginVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textContent: {
        fontSize: 16,
    },
});
