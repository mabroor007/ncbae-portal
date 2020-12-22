const studentQuery = (args, s) => {
  if (s) {
    return `UPDATE students
    SET 
      roll_no = '${args.roll_no}',
      student_name = '${args.student_name}',
      father_name = '${args.father_name}',
      gender = '${args.gender}',
      course_type = '${args.course_type}',
      phone = '${args.phone}',
      email = '${args.email}',
      student_address = '${args.student_address}',
      course_name = '${args.course_name}',
      start_yr = '${args.start_yr}',
      end_yr = '${args.end_yr}',
      course_code = '${args.course_code}',
      profile_pic = 'Picture'
    WHERE id = ${args.id};`;
  }
  return `INSERT INTO students(
      roll_no,
      student_name,
      father_name,
      gender,
      course_type,
      phone,
      email,
      student_address,
      course_name,
      start_yr,
      end_yr,
      course_code,
      profile_pic
    ) VALUES (
      '${args.roll_no}',
      '${args.student_name}',
      '${args.father_name}',
      '${args.gender}',
      '${args.course_type}',
      '${args.phone}',
      '${args.email}',
      '${args.student_address}',
      '${args.course_name}',
      '${args.start_yr}',
      '${args.end_yr}',
      '${args.course_code}',
      'Picture'
    )`;
};

module.exports = { studentQuery };
