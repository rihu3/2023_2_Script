import { useParams } from "react-router-dom";
import problemData from "../data/problemData";

const ProblemItem = () => {
	const { problemId } = useParams();  // react-router-dom 에 정의된 후크
	const problem = problemData[problemId];

	if (!problem) {
		return <span>문제를 찾을 수 없습니다.</span>
	}
	const { title, description, difficulty, input, output } = problem;
	return (
		<div className="content-item">
			<h3>{title}</h3>
			<hr />
			난이도: {difficulty} | 시간 제한 : 1초 | 메모리 제한 : 1MB | 푼 사람: 0명
			<hr />
			<p>{description}</p>
			<hr />

			<div className="examples">
				<div className="example">
					<p>입력</p>
					<p className="IO">{input}</p>
				</div>
				<div className="example">
					<p>출력</p>
					<p className="IO">{output}</p>
				</div>
			</div>

		</div>
	);
}
export default ProblemItem;