"use client";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { QuestionsService } from "@/app/lib/client";
import { fetchSelectedQuestion } from "@/store/slices/selectedQuestionSlice";

export default function QuestionDetail() {
  const dispatch = useDispatch();
  const { selectedCategory, selectedLevel } = useSelector((state: RootState) => state.gameOptions);
  const selectedQuestion = useSelector((state: RootState) => state.selectedQuestion);
  
  useEffect(() => {
    if (!selectedCategory || !selectedLevel) return;
    QuestionsService.randomQuestionRetrieve(selectedCategory, selectedLevel).then((data) => {
      dispatch(fetchSelectedQuestion(data));
    }).catch((error) => {
      console.log(error);
    });
  }, [selectedCategory, selectedLevel, dispatch]);
  
  return (
    <div>
      {selectedQuestion.instance?.question || "No question available"}
    </div>
  );
}
