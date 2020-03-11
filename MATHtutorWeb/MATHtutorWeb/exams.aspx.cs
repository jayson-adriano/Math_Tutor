using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MATHtutorWeb
{
    public partial class exams : System.Web.UI.Page
    {
        Teacher tch = new Teacher();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserID"] == null)
            {
                Response.Redirect("~/SessionExpired.aspx");
            }
            else if (!IsPostBack)
            {
                ddCourses.Items.Clear();
                ddCourses.DataSource = tch.populateCourse();
                ddCourses.DataBind();
            }
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            tch.addQuestion(txtQuestion.Text, txtAnswer.Text, ddCourses.SelectedValue.ToString());
            ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('Question added to exam bank!');", true);
            txtAnswer.Text = String.Empty;
            txtQuestion.Text = String.Empty;
        }
    }
}