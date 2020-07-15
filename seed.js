var mongoose = require("mongoose");
var mcq = require("./models/MCQ");
var subject = require("./models/Subject");
var chapter = require("./models/Chapter");
var bookmark = require("./models/UserBookmark");
var user = require("./models/User");

var subjects = [
  {
    subject: `Mathematics`,
  },
  {
    subject: `Physics`,
  },
  {
    subject: `Chemistry`,
  },
  {
    subject: `Biology`,
  },
  {
    subject: `English`,
  },
];

var chapters = [
  {
    subject: `Physics`,
    chapter: `Measurements`,
    number: 1,
  },
  {
    subject: `Physics`,
    chapter: `Scalars and Vectors`,
    number: 2,
  },
  {
    subject: `Physics`,
    chapter: `Motion and Force`,
    number: 3,
  },
  {
    subject: `Physics`,
    chapter: `Work and Energy`,
    number: 4,
  },
  {
    subject: `Physics`,
    chapter: `Circular Motion`,
    number: 5,
  },
  {
    subject: `Physics`,
    chapter: `Fluid Dynamics`,
    number: 6,
  },
  {
    subject: `Physics`,
    chapter: `Oscillations`,
    number: 7,
  },
  {
    subject: `Physics`,
    chapter: `Waves`,
    number: 8,
  },
  {
    subject: `Physics`,
    chapter: `Physical Optics`,
    number: 9,
  },
  {
    subject: `Physics`,
    chapter: `Optical Instruments`,
    number: 10,
  },
  {
    subject: `Physics`,
    chapter: `Heat and Thermodynamics`,
    number: 11,
  },
  {
    subject: `Mathematics`,
    chapter: `Number System`,
    number: 1,
  },
  {
    subject: `Mathematics`,
    chapter: `Sets, Functions and Groups`,
    number: 2,
  },
  {
    subject: `Mathematics`,
    chapter: `Matrices and Determinants`,
    number: 3,
  },
  {
    subject: `Mathematics`,
    chapter: `Quadratic Equations`,
    number: 4,
  },
  {
    subject: `Mathematics`,
    chapter: `Partial Fractions`,
    number: 5,
  },
  {
    subject: `Mathematics`,
    chapter: `Sequences and Series`,
    number: 6,
  },
  {
    subject: `Mathematics`,
    chapter: `Permutations, Combination and Probability`,
    number: 7,
  },
  {
    subject: `Mathematics`,
    chapter: `Mathematical Induction and Binomial Theorem`,
    number: 8,
  },
  {
    subject: `Mathematics`,
    chapter: `Fundamentals of Trignometry`,
    number: 9,
  },
  {
    subject: `Mathematics`,
    chapter: `Trignometric Identities`,
    number: 10,
  },
  {
    subject: `Mathematics`,
    chapter: `Trignometric Functions and their Graphs`,
    number: 11,
  },
  {
    subject: `Mathematics`,
    chapter: `Applications of Trignometry`,
    number: 12,
  },
  {
    subject: `Mathematics`,
    chapter: `Inverse Trignometric Functions`,
    number: 13,
  },
  {
    subject: `Mathematics`,
    chapter: `Solutions of Trignometric Equations`,
    number: 14,
  },
  {
    subject: `Mathematics`,
    chapter: `Functions and Limits`,
    number: 15,
  },
  {
    subject: `Mathematics`,
    chapter: `Differentiation`,
    number: 16,
  },
  {
    subject: `Mathematics`,
    chapter: `Integration`,
    number: 17,
  },
  {
    subject: `Mathematics`,
    chapter: `Introduction to Analytical Geometry`,
    number: 18,
  },
  {
    subject: `Mathematics`,
    chapter: `Linear Inequalities and Linear Programming`,
    number: 19,
  },
  {
    subject: `Mathematics`,
    chapter: `Conic Section`,
    number: 20,
  },
  {
    subject: `Mathematics`,
    chapter: `Vectors`,
    number: 21,
  },
];

var mcqs = [
  {
    statement: `What is A times B?`,
    subject: `Mathematics`,
    chapter: `Numbers`,
    topic: `Intro to Numbers`,
    option1: `A x B`,
    option2: `A + B`,
    option3: `A - B`,
    option4: `A / 2`,
    correct: `A x B`,
  },
  {
    statement: `If A and B are matrices such that AxB = BxA then this property is called?`,
    subject: `Mathematics`,
    chapter: `Matrices and Determinants`,
    topic: `Intro to Matrices`,
    option1: `Commutative`,
    option2: `Distributive`,
    option3: `Tertiary`,
    option4: `Idempotent`,
    correct: `Commutative`,
  },
  {
    statement: `The equation of state for n moles of an ideal gas is PV=nRT. The SI unit of universal gas constant R is`,
    subject: `Physics`,
    chapter: `Scalars and Vectors`,
    topic: `Introduction`,
    option1: `Erg K<sup>-1</sup> mole<sup>-1</sup>`,
    option2: `Watt K<sup>-1</sup> mole<sup>-1</sup>`,
    option3: `Newton K<sup>-4</sup> mole<sup>-1</sup>`,
    option4: `Joule K<sup>-1</sup>(K mole)<sup>-1</sup>`,
    correct: `Joule K<sup>-1</sup>(K mole)<sup>-1</sup>`,
  },
  {
    statement: `A second is defined as the duration of vibration of`,
    subject: `Physics`,
    chapter: `Quantum Physics`,
    topic: `Introduction`,
    option1: `Carbon atom`,
    option2: `Cesium atom`,
    option3: `Radium atom`,
    option4: `Uranium atom`,
    correct: `Cesium atom`,
  },
  {
    statement: `Two forces of same magnitude are acting on an object, the magnitude of their resultant is minimum if the angle between them is`,
    subject: `Physics`,
    chapter: `Work and Energy`,
    topic: `Force`,
    option1: `45&deg`,
    option2: `60&deg`,
    option3: `90&deg`,
    option4: `180&deg`,
    correct: `180&deg`,
  },
  {
    statement: `Force of 50 N acting on a body at an angle θ with horizontal. If 150 J work is done by displacing it 3 m, then θ is`,
    subject: `Physics`,
    chapter: `Work and Energy`,
    topic: `Force`,
    option1: `60&deg`,
    option2: `30&deg`,
    option3: `0&deg`,
    option4: `45&deg`,
    correct: `0&deg`,
  },
  {
    statement: `A piece of wire is bent in the shape of a parabola y = kx<sup>2</sup> (y-axis vertical) with a bead of mass m on it. The bead can slide on the wire without friction. It stays at the lowest point of the parabola when the wire is at rest. The wire is now accelerated parallel to the x-axis with a constant acceleration a. The distance of the new equilibrium position of the bead, where the bead can stay at rest with respect to the wire, from the y-axis is`,
    subject: `Physics`,
    chapter: `Work and Energy`,
    topic: `Force`,
    option1: `<sup>a</sup>/<sub>gk</sub>`,
    option2: `<sup>a</sup> &#8260; <sub>2gk</sub>`,
    option3: `<sup>2a</sup> &#8260; <sub>gk</sub>`,
    option4: `<sup>a</sup> &#8260; <sub>4gk</sub>`,
    correct: `<sup>a</sup> &#8260; <sub>2gk</sub>`,
  },
  {
    statement: `When a rubber band is stretched by a distance x, it exerts a restoring force of magnitude F = ax + bx<sup>2</sup>, where a and b are constants. The work done in stretching the unstretched rubber band by L is`,
    subject: `Physics`,
    chapter: `Work and Energy`,
    topic: `Force`,
    option1: `aL<sup>2</sup> + bL<sup>3</sup>`,
    option2: `<sup>1</sup> &#8260; <sub>2</sub>(aL<sup>2</sup> + bL<sup>3</sup>)`,
    option3: `<sup>aL<sup>2</sup></sup> &#8260; <sub>2</sub> + <sup>bL<sup>3</sup></sup> &#8260; <sub>2</sub>`,
    option4: `<sup>1</sup>&#8260;<sub>2</sub>(<sup>aL<sup>2</sup></sup> &#8260; <sub>2</sub> + <sup>bL<sup>3</sup></sup> &#8260; <sub>2</sub>)`,
    correct: `<sup>aL<sup>2</sup></sup> &#8260; <sub>2</sub> + <sup>bL<sup>3</sup></sup> &#8260; <sub>2</sub>`,
  },
  {
    statement: `On heating a liquid at its dynamic equilibrium the concentration of molecules in vapour state as well as in liquid state`,
    subject: `Chemistry`,
    chapter: `Chemical Equilibrium`,
    topic: `Intro to Chemical Equilibrium`,
    option1: `Increase`,
    option2: `Decrease`,
    option3: `Remains Constant`,
    option4: `None of these`,
    correct: `Remains Constant`,
  },
  {
    statement: `All the names used in binomial nomenclature are`,
    subject: `Biology`,
    chapter: `Biological Nomenclature`,
    topic: `Nomenclature`,
    option1: `Greek`,
    option2: `Latin`,
    option3: `English`,
    option4: `Arabic`,
    correct: `Latin`,
  },
];

var bookmarks = [
  {
    userID: "109469777824646264497",
    bookmarks: ["5f0b2c3969469d066ce66ea8"],
  },
];

function seedDB() {
  // subject.deleteMany({}, function (err) {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         subject.create(subjects, function (err, newSubjects) {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 console.log("Successfully loaded all subjects");
  //             }
  //         })
  //     }
  // });
  // chapter.deleteMany({}, function (err) {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         chapter.create(chapters, function (err, newChaps) {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 console.log("Successfully loaded all chapters");
  //             }
  //         })
  //     }
  // });
  // mcq.deleteMany({}, function (err) {
  //     if (err) {
  //         console.log(err);
  //     } else {
  //         mcq.create(mcqs, function (err, newMCQS) {
  //             if (err) {
  //                 console.log(err);
  //             } else {
  //                 console.log("Successfully loaded all MCQs");
  //             }
  //         })
  //     }
  // });
  bookmark.deleteMany({}, function (err) {
    if (err) {
      console.error(err);
    } else {
      bookmark.create(bookmarks, function (err, newBookmarks) {
        if (err) {
          console.error(err);
        } else {
          console.log(`Successfully loaded all Bookmarks`);
        }
      });
    }
  });
  user.findOneAndDelete(
    {
      userGoogleID: `109469777824646264497`,
    },
    function (err) {
      if (err) {
        console.error(err);
      } else {
        if (err) {
          console.error(err);
        } else {
          console.log(`Deleted all users`);
        }
      }
    }
  );
}
module.exports = seedDB;
