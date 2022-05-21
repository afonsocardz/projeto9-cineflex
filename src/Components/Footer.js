import Poster from "./Poster";
import ColumnContainer from "./Styles/ColumnContainer";
import FlexContainer from "./Styles/FlexContainer";

export default function Footer({ url, title, ...otherProps }) {
    const { weekday, time } = { ...otherProps };
    return (
        <FlexContainer fontSize={"26px"} backgroundColor={"#DFE6ED"} height={"117px"} position={"fixed"} place={"bottom"}>
            <Poster size={"small"} url={url} name={title} />
            <ColumnContainer>
                <span>{title}</span>
                {weekday ? <span>{weekday} - {time}</span> : <></>}
            </ColumnContainer>
        </FlexContainer>
    );
}