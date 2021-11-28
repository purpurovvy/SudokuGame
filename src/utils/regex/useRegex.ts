type UseRegex = (regex: RegExp) => (textInput: string) => boolean;
/**
 * A function which generate validator for specific regex
 * @param regex regex pattern for validation
 */
export const useRegex: UseRegex = (regex) => {
  const checkRegex = (textInput: string) => {
    const check = textInput && textInput.match(regex);
    return textInput ? !!check : true;
  };

  return checkRegex;
};
