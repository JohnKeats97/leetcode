// https://leetcode.com/problems/course-schedule/description/

// представляю все как граф
// если цсть цикл в графе то false
// прохожу по всем нодам и ищу возможность пройти дальше
// помечаю те что уже прошел - для цикла (это обнуляю кажый раз)
// помечаю те что уже прошел, для подсчета, чтобы не почитать уже пройденый

var canFinish = function(numCourses, prerequisites) {
    const uGraph = {};

    for (let i = 0; i < prerequisites.length; i++) {
        if (!uGraph[prerequisites[i][0]]) {
            uGraph[prerequisites[i][0]] = {
                next: [],
                // val: prerequisites[i][0],
            };
        }

        if (!uGraph[prerequisites[i][1]]) {
            uGraph[prerequisites[i][1]] = {
                next: [uGraph[prerequisites[i][0]]],
                // val: prerequisites[i][1],
            };
        } else  {
            uGraph[prerequisites[i][1]].next.push(uGraph[prerequisites[i][0]]);
        }
    }

    if (!prerequisites.length) {
        return true;
    }

    function glub(node) {
        if (!node) {
            return true;
        }

        if (node.was) {
            return false;
        }

        node.was = true;

        if (!node.noNeedCount) {
            numCourses--;
            node.noNeedCount = true;
        }

        return node.next.every(glub);
    }

    return Object.values(uGraph).some((node) => {
        Object.values(uGraph).forEach((course) => course.was = false)

        if (!glub(node)) {
            return false;
        }

        return numCourses === 0;
    })
};