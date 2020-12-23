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

const courseQuery = (course, s) => {
  if (s) {
    return `
      UPDATE courses
        SET
          course_name = ${course.course_name},
          course_code = ${course.course_code},
          course_type = ${course.course_type},
          fee = ${course.fee},
          genre = ${course.genre},
          start_yr = ${course.start_yr},
          end_yr = ${course.end_yr}
        WHERE
          id = ${course.id}
    `;
  }
  return `
    INSERT INTO courses (
      course_name,
      course_code,
      course_type,
      fee,
      genre,
      start_yr,
      end_yr
    ) VALUES (
      '${course.course_name}',
      '${course.course_code}',
      '${course.course_type}',
      '${course.fee}',
      '${course.genre}',
      '${course.start_yr}',
      '${course.end_yr}'
    );
  `;
};

const teacherQuery = (teacher, s) => {
  if (s) {
    return `
      UPDATE teacher
        SET
          teacher_name = ${teacher.teacher_name},
          gender = ${teacher.gender},
          teacher_type = ${teacher.teacher_type},
          qualification = ${teacher.qualification},
          phone = ${teacher.phone},
          email = ${teacher.email},
          course_name = ${teacher.course_name},
          course_code = ${teacher.course_code},
          subject_name = ${teacher.subject_name},
          profile_pic = 'Picture'
        WHERE
          id = ${teacher.id}
    `;
  }
  return `
    INSERT INTO teachers (
      teacher_name,
      gender,
      teacher_type,
      qualification,
      phone,
      email,
      course_name,
      course_code,
      subject_name,
      profile_pic
    ) VALUES (
      ${teacher.teacher_name},
      ${teacher.gender},
      ${teacher.teacher_type},
      ${teacher.qualification},
      ${teacher.phone},
      ${teacher.email},
      ${teacher.course_name},
      ${teacher.course_code},
      ${teacher.subject_name},
      'Picture'
    )
  `;
};

module.exports = { studentQuery, courseQuery, teacherQuery };
