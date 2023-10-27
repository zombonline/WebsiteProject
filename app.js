function CheckIfCurrentPage(pageName)
{
    path = window.location.pathname;
    page = path.split("/").pop();
    return pageName == page;
}