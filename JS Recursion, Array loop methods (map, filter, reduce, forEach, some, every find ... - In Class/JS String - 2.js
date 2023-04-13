function correctMistake(line, incorrectWord, toBeReplacedWithChar) {
    const regex = new RegExp(incorrectWord, "g");
    return line.replace(regex, toBeReplacedWithChar);
}
