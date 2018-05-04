import React from "react";

import * as S from "./styled";

export function Rating(props) {
    const rating = [1, 2, 3, 4, 5];
    const rate = props.paymentCostRating;
    return (
        <S.Rating>
            {rating.map(x => (
                <S.RatingCircle key={x} isActive={rate >= x}>
                    £
                </S.RatingCircle>
            ))}
        </S.Rating>
    );
}
