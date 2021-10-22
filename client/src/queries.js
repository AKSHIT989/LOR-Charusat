exports.AUTHENTICATE_USER = (email, password) =>
  JSON.stringify({
    query: `query {
          authenticateUser(email: "${email}", password: "${password}") {
            authenticated,
            user_id,
            user_type,
            email,
            access_token,
            refresh_token,
            first_name,
            last_name,
            institute,
            department
          }
        }`,
  });

exports.ADD_USER = (userId, userType, user) =>
  JSON.stringify({
    query: `mutation {
      addUser(
      user_id: ${userId},
      user_type: "${userType}",
      userInfo: {
        charusat_id: "${user.charusat_id}",
        user_type: "${user.user_type}",
        institute: "${user.institute}",
        department: "${user.department}",
        first_name: "${user.first_name}",
        last_name: "${user.last_name}",
        counsellor: "${user.counsellor}",
        hod: "${user.hod}",
        mobile: "${user.mobile}",
        email: "${user.email}",
        password: "${user.password}",
      }) 
    }`,
  });

exports.REGISTER_USER = (otp, user) =>
  JSON.stringify({
    query: `mutation {
      registerUser(
      otp: ${otp},
      userInfo: {
        charusat_id: "${user.charusat_id}",
        user_type: "${user.user_type}",
        institute: "${user.institute}",
        department: "${user.department}",
        first_name: "${user.first_name}",
        last_name: "${user.last_name}",
        counsellor: "${user.counsellor}",
        hod: "${user.hod}",
        mobile: "${user.mobile}",
        email: "${user.email}",
        password: "${user.password}",
      }) 
    }`,
  });

exports.LOR_REQUEST = (
  userId,
  userType,
  lorRequest,
  personalDetails,
  academicDetails,
  competitiveExamDetails,
  universityPreferenceList,
  facultyPreferenceList
) =>
  JSON.stringify({
    query: `mutation(
      $lorRequest: lorRequestInput,
      $personalDetails: personalDetailsInput,
      $competitiveExamDetails: [competitiveExamInput], 
      $universityPreferenceList: [universityPreferenceInput], 
      $facultyPreferenceList: [facultyPreferenceInput],
      $academicDetails: [academicDetailsInput]) {
          lorRequest(
              user_id: ${userId},
              user_type: "${userType}"
              lorRequestInfo: $lorRequest, 
              personalDetails: $personalDetails,
              competitiveExamDetails: $competitiveExamDetails, 
              facultyPreferenceList: $facultyPreferenceList,
              universityPreferenceList: $universityPreferenceList,
              academicDetails: $academicDetails
          )
      }`,
    variables: {
      lorRequest,
      personalDetails,
      competitiveExamDetails,
      universityPreferenceList,
      facultyPreferenceList,
      academicDetails,
    },
  });

exports.UPDATE_LOR_REQUEST = (
  userId,
  userType,
  lorRequest,
  personalDetails,
  academicDetails,
  competitiveExamDetails,
  universityPreference,
  facultyPreference
) =>
  JSON.stringify({
    query: `mutation(
      $lorRequest: changeInLorRequest,
      $personalDetails: changeInPersonalDetails,
      $academicDetails: changeInAcadDetails,
      $competitiveExamDetails: changeInCompExamDetails, 
      $universityPreference: changeInUniPref, 
      $facultyPreference: changeInFacultyPref
      ) {
        updateLOR(
              user_id: ${userId},
              user_type: "${userType}"
              lorRequest: $lorRequest, 
              personalDetails: $personalDetails,
              academicDetails: $academicDetails
              competitiveExamDetails: $competitiveExamDetails, 
              universityPreference: $universityPreference,
              facultyPreference: $facultyPreference
          )
      }`,
    variables: {
      lorRequest,
      personalDetails,
      competitiveExamDetails,
      universityPreference,
      facultyPreference,
      academicDetails,
    },
  });

exports.GET_STU_LOR_REQUEST = (user_id, user_type, institute, department) =>
  JSON.stringify({
    query: `query {
      getStuLORRequest(
      user_id: ${user_id}, 
      user_type: "${user_type}",
      institute: "${institute}",
      department: "${department}") {
          lor_request {
              parent_mobile,
              passout_date,
              placed_cdpc,
              company,
              bond_completed,
              letter_head,
              lor_status,
          },
          personal_details {
            first_name,
            last_name,
            charusat_id,
            mobile
          }
          acad_details {
              id,
              sem,
              attendance,
              cgpa
          },
          comp_exam_details {
              id,
              exam_name,
              mark,
              upload_file
          },
          uni_pref {
              id,
              university_name,
              course_name,
              country_name,
              intake_date
          },
          faculty_pref {
              id,
              faculty_name,
              faculty_email,
              stu_upload
          },
          faculty_list {
            email,
            name
          }
      }
  }`,
  });

exports.STU_LOR_DRAFT_STATUS = (userId, userType) =>
  JSON.stringify({
    query: `query {
      getStuLORDraftStatus(
      user_id: ${userId}, 
      user_type: "${userType}") {
          faculty_name,
          remark,
          status
      }
  }`,
  });

exports.GET_FACULTY_REQUEST = (email, userId, userType) =>
  JSON.stringify({
    query: `query {
      getFacultyRequests(
          email: "${email}", 
          user_id: ${userId}, 
          user_type: "${userType}") {
          id,
          charusat_id,
          stu_name,
          remark,
          stu_upload,
          faculty_upload
      }
  }`,
  });

exports.GET_TPR_REQUEST = (email, userId, userType) =>
  JSON.stringify({
    query: `query {
      getTPRRequests(
          email: "${email}", 
          user_id: ${userId}, 
          user_type: "${userType}") {
          id,
          charusat_id,
          stu_name,
          remark,
          status,
          stu_upload,
          faculty_upload
      }
  }`,
  });

exports.GET_HOD_REQUEST = (email, userId, userType) =>
  JSON.stringify({
    query: `query {
      getHODRequests(
          email: "${email}", 
          user_id: ${userId}, 
          user_type: "${userType}") {
          id,
          charusat_id,
          stu_name,
          remark,
          status,
          stu_upload,
          faculty_upload
      }
  }`,
  });

exports.UPDATE_FACULTY_REMARK = (id, userId, userType, remark) =>
  JSON.stringify({
    query: `query {
      updateFacultyRemark (
          id: ${id}, 
          user_id: ${userId},
          user_type: "${userType}",
          remark: "${remark}"
      )
  }`,
  });

exports.UPDATE_FACULTY_LOR_STATUS = (ids, userId, userType, approved) =>
  JSON.stringify({
    query: `query($ids: [Int]) {
      updateFacultyStatus (
          ids: $ids, 
          user_id: ${userId},
          user_type: "${userType}",
          approved: ${approved}
      )
  }`,
    variables: {
      ids,
    },
  });

exports.GET_FACULTY_LIST = (userId, userType, institute, department) =>
  JSON.stringify({
    query: `query {
      getFaculties (
          user_id: ${userId},
          user_type: "${userType}",
          institute: "${institute}",
          department: "${department}") {
          email,
          name
      }
  }`,
  });

exports.GET_INSTITUTES = () =>
  JSON.stringify({
    query: `query {
      getAllInstitutes 
  }`,
  });

exports.GET_DEPARTMENTS = (institute) =>
  JSON.stringify({
    query: `query {
      getInstiDepartments (institute: "${institute}")
    }`,
  });

exports.GET_FACULTIES_HOD = (institute, department) =>
  JSON.stringify({
    query: `query {
      getFacultiesHod (institute: "${institute}", department: "${department}") {
        hod {
            name,
            email
        },
        faculties {
            name,
            email
        }
      }
    }`,
  });

exports.GET_OTP = (email) =>
  JSON.stringify({
    query: `query {
      getOtp (email: "${email}") 
    }`,
  });

exports.RESET_PASSWORD = (userId, userType, email, password) =>
  JSON.stringify({
    query: `query {
      resetPassword (user_id: ${userId}, user_type: "${userType}", email: "${email}", password: "${password}") 
    }`,
  });
