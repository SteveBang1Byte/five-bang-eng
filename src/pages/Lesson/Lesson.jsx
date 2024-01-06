import TextField from "../../components/TextField/TextField";
import TitlePage from "../../components/TitlePage/TitlePage";
import Text , {TextType } from "../../components/Text/Text";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

const Lesson = () => {
    return (
        <>
            <TitlePage>IELTS Writing Task 1</TitlePage>

            <Text>
            You should spend about 20 minutes on this task.
            </Text>

            <Text type={TextType.primary}>
                The graph below shows the average monthly change in the prices of three metals during 2014.
            </Text>

            <Text>
                Summarise the information by selecting and reporting the main features and make comparisons where relevant.
            <br />
                Write at least 150 words.
            </Text>

            <img className="w-2/6" src='https://www.ielts-writing.info/images/graphs/IELTS_Writing_Task_1_LineGraph_202.png' alt="Graph" />

            <TextArea label={'Answer'} placeholder={'Enter your answer...'}/>

            <Button>Submit</Button>
        </>
    );
}

export default Lesson;