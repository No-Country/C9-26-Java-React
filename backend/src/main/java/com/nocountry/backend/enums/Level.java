package com.nocountry.backend.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Level {
    A1("A1", "Beginner"),
    A2("A2", "Elementary"),
    B1("B1", "Intermediate"),
    B2("B2", "Upper Intermediate"),
    C1("C1", "Advanced"),
    C2("C2", "Proficient");

    private final String levelCode;

    private final String levelDescription;
}