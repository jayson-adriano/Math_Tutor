using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MATHtutorWeb
{
    public partial class login : System.Web.UI.Page
    {
        Teacher tch = new Teacher();
        protected void Page_Load(object sender, EventArgs e)
        {
            

        }
        protected void btnLogin_Click(object sender, EventArgs e)
        {
            Session["userID"] = tch.assignID(txtBoxLoginUserName.Text.ToString());
            string result = tch.logIn(txtBoxLoginUserName.Text.ToString(), txtBoxLoginPassword.Text.ToString());

            if (txtBoxLoginPassword.Text == String.Empty || txtBoxLoginUserName.Text == String.Empty)
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('Username or Password must not be empty!');", true);
                txtBoxLoginUserName.Text = String.Empty;
                txtBoxLoginPassword.Text = String.Empty;
            }
            else if (result == "YOUR USERNAME DOES NOT EXIST IN DATABASE")
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('YOUR USERNAME DOES NOT EXIST IN DATABASE');", true);
                txtBoxLoginUserName.Text = String.Empty;
                txtBoxLoginPassword.Text = String.Empty;
            }
            else if (result == "YOUR USERNAME AND PASSWORD DOES NOT MATCH!")
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('YOUR USERNAME AND PASSWORD DOES NOT MATCH!');", true);
                txtBoxLoginPassword.Text = String.Empty;
            }
            else if (result == "LOGIN SUCCESFUL!")
            {
                ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('LOGIN SUCCESFUL!');", true);
                Response.Redirect("~/home.aspx");
                //Label1.Text = Session["userID"].ToString();

            }
            else { ScriptManager.RegisterStartupScript(this, this.GetType(), "ShowStatus", "javascript:alert('YOU AREA AS STUDENT! YOU CAN'T LOG IN!');", true); }
            txtBoxLoginUserName.Text = String.Empty;
            txtBoxLoginPassword.Text = String.Empty;

        }

    }
}