

function Card({ buttonText, onClickButton }) {

    return <div className="card">
        <button onClick={onClickButton}>
          {buttonText}
        </button>
      </div>
}

export default Card

