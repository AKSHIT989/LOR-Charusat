const studentType = `
type Lor_Request{
  id: String!
  user_id: String!
  parent_mobile: String!
  passout_date: String!
  placed_cdpc: Boolean!
  company: String
  bond_completed: Boolean
  academic_detail: [Academic_Detail!]!
  competitive_exam_details: [Competitive_Exam_Details!]
  letter_head: Int!
  university_preference_list : [University_Preference_List!]
  faculty_preference: [Faculty_Preference_List!]!
  lor_status: String!
  lor_remarks: String!
  issue_date: String!
}

type Academic_Detail{
  id: String!
  sem_no: Int!
  Attendance: Float!
  CGPA: Float!
}

type Competitive_Exam_Details{
  id: String!
  exam_name: String!
  mark: Float!
  upload_file: String!
}

type University_Preference_List{
  id: String!
  university_name: String!
  course_name: String!
  country_name: String!
  intack: String!
}

type Faculty_Preference_List{
  id: String!
  faculty_name: String!
  faculty_email: String!
  upload_lor: String!
}

input Lor_RequestInput {
  user_id: String!
  parent_mobile: String!
  passout_date: String!
  placed_cdpc: Boolean!
  company: String
  bond_completed: Boolean
  academic_detail: [Academic_DetailInput!]!
  competitive_exam_details: [Competitive_Exam_DetailsInput!]
  letter_head: Int!
  university_preference_list : [University_Preference_ListInput!]
  faculty_preference: [Faculty_Preference_ListInput!]!
}

input Academic_DetailInput{
  id: String!
  sem_no: Int!
  Attendance: Float!
  CGPA: Float!
}

input Competitive_Exam_DetailsInput{
  id: String!
  exam_name: String!
  mark: Float!
  upload_file: String!
}

input University_Preference_ListInput{
  id: String!
  university_name: String!
  course_name: String!
  country_name: String!
  intack: String!
}

input Faculty_Preference_ListInput{
  id: String!
  faculty_name: String!
  faculty_email: String!
  upload_lor: String!
}

input UpdateDoctor {
  name: String!
  education: String
  experience: Int
  city: String
  email: String
  category: String
  phone: String
}


`;

exports.studentType = studentType;
