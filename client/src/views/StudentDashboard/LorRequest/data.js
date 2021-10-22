export let lor_request = {
  parent_mobile: "",
  passout_date: "",
  company: "",
  placed_cdpc: null,
  bond_completed: null,
  letter_head: null,
  lor_status: "",
};

export let personal_details = {
  first_name: "",
  last_name: "",
  charusat_id: "",
  mobile: "",
}

export let acad_details = [1, 2, 3, 4, 5, 6, 7, 8].map((semNum) => ({
  sem: semNum,
  attendance: null,
  cgpa: null,
}));

export let comp_exam_details = [];
export let uni_pref = [];
export let faculty_pref = [];

export let changesInLorRequest = {
  update: {},
};
export let changesInPersonalDetails = {
  update: {},
};
export let changesInAcadDetails = {
  update: {},
};
export let changesInCompExamDetails = {
  update: {},
  add: [],
  delete: [],
};
export let changesInUniPref = {
  update: {},
  add: [],
  delete: [],
};
export let changesInFacultyPref = {
  update: {},
  add: [],
  delete: [],
};


export let resetChanges = () => {
  changesInLorRequest = {
    update: {},
  };
  changesInPersonalDetails = {
    update: {},
  };
  changesInAcadDetails = {
    update: {},
  };
  changesInCompExamDetails = {
    update: {},
    add: [],
    delete: [],
  };
  changesInUniPref = {
    update: {},
    add: [],
    delete: [],
  };
  changesInFacultyPref = {
    update: {},
    add: [],
    delete: [],
  };
}
