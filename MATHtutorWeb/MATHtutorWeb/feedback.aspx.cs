using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MATHtutorWeb
{
    public partial class feedback : System.Web.UI.Page
    {
        Teacher tch = new Teacher();

        protected void bindGrid()
        {
            DataTable dt = tch.ViewStudentFeedbacks();
            gridviewFeedback.DataSource = dt.Copy();
            gridviewFeedback.DataBind();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserID"] == null)
            {
                Response.Redirect("~/SessionExpired.aspx");
            }
            bindGrid();
        }
    }
}