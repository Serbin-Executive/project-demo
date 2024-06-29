import { ReactElement } from "react";
import Block from "../Block";
import { useNavigate } from "react-router-dom";

export interface INavigationContainerProps {
    title: string;
}

const NavigationContainer = ({
    title,
}: INavigationContainerProps): ReactElement => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);    
    }

    return (
        <div className="navigation-container">
            <Block onClick={goBack} width="70px" height="40px">Back</Block>
            <h2>{title}</h2>
        </div>
    );
};

export default NavigationContainer;
