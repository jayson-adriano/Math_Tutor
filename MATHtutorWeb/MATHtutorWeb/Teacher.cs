using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MATHtutorWeb
{
    public class Teacher
    {

        SqlConnection con = new SqlConnection("Data Source = .\\SQLEXPRESS; Initial Catalog = MyTutor; Integrated Security = False; User ID = melly; Password=1234567");
        Helper hlp = new Helper();
        int userID;

        public string logIn(string userName, string password)
        {
            SqlCommand cmd = new SqlCommand("CheckUsername", con); //check if username does not exists
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@username", SqlDbType.NVarChar, 50).Value = userName;
            SqlParameter sqlParam = new SqlParameter("@result", DbType.Boolean);
            sqlParam.Direction = ParameterDirection.Output;
            cmd.Parameters.Add(sqlParam);

            hlp.checkingHelper(cmd, con);
            int result = int.Parse(cmd.Parameters["@result"].Value.ToString());

            if (result == 1)
            {
                return "YOUR USERNAME DOES NOT EXIST IN DATABASE";
            }
            else //username exists
            {
                cmd = new SqlCommand("CheckUsernameAndPassword", con); //check if username and password matches
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@username", SqlDbType.NVarChar, 50).Value = userName;
                cmd.Parameters.Add("@password", SqlDbType.NVarChar, 50).Value = password;
                sqlParam = new SqlParameter("@result", DbType.Boolean);
                sqlParam.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(sqlParam);

                hlp.checkingHelper(cmd, con);
                result = int.Parse(cmd.Parameters["@result"].Value.ToString());

                if (result == 1)
                {
                    return "YOUR USERNAME AND PASSWORD DOES NOT MATCH!"; //username and password does not match
                }
                else //USERNAME AND PASSWORD MATCHED"
                {
                    cmd = new SqlCommand("CheckIfTeacher", con); //check if teacher
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@username", SqlDbType.NVarChar, 50).Value = userName;

                    DataTable dt = hlp.resultHelper(cmd);

                    if (dt.Rows.Count > 0) //instructor
                    {
                        return "LOGIN SUCCESFUL!";                        
                    }
                    else {
                        return "You ARE A STUDENT!";
                    }

                }
            }
        }
        public int assignID(string userName)
        {
            SqlCommand cmd = new SqlCommand("AssignTeacherID", con); //assign accountID
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@username", SqlDbType.VarChar, 20).Value = userName;

            DataTable dt2 = hlp.resultHelper(cmd);

            if (dt2.Rows.Count > 0)
            {
                userID = int.Parse(dt2.Rows[0][0].ToString()); //accountID
                string userIDS = dt2.Rows[0][0].ToString();
                return userID;
            }
            else { return 9999; }
        }        
        public DataTable ViewStudenList()
        {
            SqlCommand cmd = new SqlCommand("TeacherGetStudentList", con);
            cmd.CommandType = CommandType.StoredProcedure;
            return hlp.resultHelper(cmd);
        }
        public DataTable ViewStudenGrades(int id)
        {
            SqlCommand cmd = new SqlCommand("TeacherGetStudentGrades", con);
            cmd.Parameters.Add("@id", SqlDbType.Int).Value = id;
            cmd.CommandType = CommandType.StoredProcedure;
            return hlp.resultHelper(cmd);
        }
        public DataTable ViewStudentFeedbacks()
        {
            SqlCommand cmd = new SqlCommand("TeacherGetFeedback", con);
            cmd.CommandType = CommandType.StoredProcedure;
            return hlp.resultHelper(cmd);
        }

        public List<string> populateCourse()
        {
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("TeacherGetCourses", con);
            cmd.CommandType = CommandType.StoredProcedure;

            dt = hlp.resultHelper(cmd);
            int count = dt.Rows.Count;
            List<string> services = new List<string>();

            for (int i = 0; i < count; i++)//rows
            {
                services.Add(dt.Rows[i][0].ToString());
            }

            return services.ToList();
        }
        public DataTable addQuestion(string ques, string ans, string course)
        {
            SqlCommand cmd = new SqlCommand("TeacherAddQuesiton", con);
            cmd.Parameters.Add("@course", SqlDbType.VarChar, 4).Value = course;
            cmd.Parameters.Add("@ques", SqlDbType.NVarChar).Value = ques;
            cmd.Parameters.Add("@ans", SqlDbType.NVarChar).Value = ans;
            cmd.CommandType = CommandType.StoredProcedure;
            return hlp.resultHelper(cmd);
        }
    }
}