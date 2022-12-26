const MyButton = ({text, type, onClick}) => {
    const btnType = ['positive', 'negative'].includes(type)? type:'default';
    // 배열안에 값이 없다면 type을 default로 바꿔주는 코드
    return (
        <button 
            className={["MyButton", `MyButton_${type}`].join(' ')} 
            onClick={onClick}>
            {text}
        </button>
    )
};

MyButton.defaultProps = {
    type: "default",
};

export default MyButton;