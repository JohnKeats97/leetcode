// https://leetcode.com/problems/buddy-strings/

function buddyStrings(s: string, goal: string): boolean {
    let difI = -1;
    let count = 0;
    const vac = {};
    let can = false;

    if (s.length !== goal.length) {
        return false;
    }

    // прохожу и смотрю, что если элементы не равны, то запоминаю первый, когда натыкаюсь на второй - смотрю, если он встанет на место первого - будут ли одинаковые буквы на тех индексах

    for (let i = 0; i < s.length; i++) {
        // если есть повторяющиеся буквы - я могу их свопнуть (как запасной вариант)
        if (vac[s[i]]) {
            can = true;
        } else {
            vac[s[i]] = 1;
        }

        if (s[i] !== goal[i] && !count) {
            difI = i;
            count++;
        } else if (s[i] !== goal[i] && count === 1 && s[i] === goal[difI] && s[difI] === goal[i]) {
            count++;
            can = true;
        } else if (s[i] !== goal[i]) {
            return false;
        }
    }

    return can && (count > 1 || !count);
};