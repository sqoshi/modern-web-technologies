import bs4
import sys
def run_script(name,file_name="projects.html"):
    with open(file_name) as inf:
        txt = inf.read()
        soup = bs4.BeautifulSoup(txt)
    
    with open(f"{file_name.split('.')[0]}_copy.html", "w+") as fc:
        fc.write(str(soup.prettify()))


    root = soup.new_tag("div",**{'class':"project-tile"})

    obj = soup.new_tag("div",**{'class':"project-object"})
    cont = soup.new_tag("div",**{'class':"project-container" ,'onclick':"toggle_project_info(this)"})
    img = soup.new_tag("img", **{'alt':'_'.join(name.split()), 'class':"project-object-img"},src=f"resources/img/projects/{'_'.join(name.split())}.png")
    ovly = soup.new_tag("div",**{'class':'project-object-img-overlay'})
    p =soup.new_tag("p",**{'class':'project-object-name'})
    p.insert(0,bs4.NavigableString(name.capitalize()))
    cont.append(img)
    cont.append(ovly)
    cont.append(p)
    obj.append(cont)

    info = soup.new_tag("div",**{'class':"project-info"})
    txt = soup.new_tag("div",**{'class':"text"})
    em = soup.new_tag("embed",**{'class':"readme"},src=f"resources/readmes/{'_'.join(name.split())}.html")
    txt.append(em)
    info.append(txt)
    root.append(obj)
    root.append(info)

    soup.html.body.section.div.append(root)
    soup = soup.prettify()

    with open(file_name, "w") as outf:
        outf.write(str(soup))


try:
    run_script(sys.argv[1])
except:
    raise RuntimeError("Sorry, something went wrong. Maybe you have forgot to input name of new project as argument.")