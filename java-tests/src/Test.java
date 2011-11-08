/**
 * Created by IntelliJ IDEA.
 * User: sam
 * Date: 10/15/11
 * Time: 9:04 PM
 * To change this template use File | Settings | File Templates.
 */

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class Test {

    public static void main(String[] args) {
        try {
            Document doc = Jsoup.connect("http://localhost/~sam/web_pages/Apex_Beer_Menu.html").get();
            Element elem = doc.getElementById("logo");
            Elements elems = doc.select("table.beer");
            System.out.println("boo");
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
    }

}
