export const scoresInitialState = () => {
  let initial = [];
  for (let i = 0; i < 9; i++) {
    initial = initial.concat([[null, null]]);
  }
  initial = initial.concat([[null, null, null]]);
  return initial;
};

let been_here = false
const addScore = (score, scores) => {
    if (been_here) {
        been_here = false
        return [...scores]
    }else been_here = true
  for (let i in scores) {
      if (!scores[i][0] && scores[i][0] !== 0 && scores[i][1] !== "strike") {
        if (
          i > 1 &&
          scores[i - 2][1] === "strike" &&
          scores[i - 1][1] === "strike"
        ) {
          scores[i - 2].sum += score;
          scores[i - 1].sum = scores[i - 2].sum + score;
        } if (
          i > 0 &&
          (scores[i - 1][1] === "spare" )
        )
          scores[i - 1].sum += score;
          if (score >= 10) {
                if (i == scores.length - 1) scores[i][0] = 'strike'
                else {
                   scores[i][0] = "";
                    scores[i][1] = "strike";
                }    
            
            scores[i].sum = (i > 0 ? scores[i - 1].sum : 0) + 10;
            if(i>0 && scores[i - 1][1] === "strike") scores[i - 1].sum += score;
        } else {
          scores[i][0] = score;
        }
        return [...scores];
      } else if (!scores[i][1] && scores[i][1] !== 0) {
          if (i > 0 && scores[i - 1][1] === "strike")
                scores[i - 1].sum += (score==10? 0:score) + (scores[i][0] == 'strike'? 10 :scores[i][0]) ;
            scores[i][1] = score == 10 ? 'strike' : score;
            scores[i].sum =
              (i > 0 ? scores[i - 1].sum : 0) +
              score +
              (scores[i][0] == "strike" ? 10 : scores[i][0]);
            if (scores[i][0] + scores[i][1] == 10) {
                scores[i][1] = "spare";
            }
        return [...scores];
      } else if (
        i == scores.length - 1 &&
        !scores[i][2] &&
        (scores[i][1] == "spare" || scores[i][1] == "strike")
      ) {
            scores[i][2] = score==10? 'strike': score;
            scores[i].sum += score;
      }
    }
    return [...scores];
};

const GameReducer = (scores, action) => {
  switch (action.type) {
    case "ADD_SCORE":
          const result = addScore(action.score, [...scores]);
      return result;
    case "SET_SCORES":
      return [...action.scores];
    case "GET_FINAL_SCORE":
    default:
      return [...scores];
  }
};

export default GameReducer;
