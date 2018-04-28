import React from "react";
import * as S from "./styled";

export class Header extends React.Component {
    render() {
        return (
            <S.Header>
                <S.Title>
                    <span>Where your money goes</span>
                </S.Title>
                <S.Subtitle>
                    <span>
                        Payments made by Chichester District Council to individual suppliers with a
                        value over £500 made within October.
                    </span>
                </S.Subtitle>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <S.Line />
                </div>
            </S.Header>
        );
    }
}
