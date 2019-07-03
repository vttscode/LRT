package lrt;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


@org.springframework.stereotype.Service
public class Service {

    List<LrtLive> getProgramsList() {
        List<LrtLive> lrtLives = new ArrayList<>();
        Elements elements = getContentFromUrl();

        for (Element element : elements) {
            Element parent = element.parent();
            lrtLives.add(getLivePrograms(parent));
        }
        return lrtLives;
    }

    private Elements getContentFromUrl() {
        Elements elementsByClass = null;

        try {
            URL url = new URL("https://www.lrt.lt/mediateka/tiesiogiai/");
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(url.openStream()));

            StringBuilder stringBuilder = new StringBuilder();
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
                stringBuilder.append(System.lineSeparator());
            }

            Document document = Jsoup.parseBodyFragment(stringBuilder.toString());
            Element body = document.body();
            elementsByClass = body.getElementsByClass("channel-item__progress");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return elementsByClass;
    }

    private LrtLive getLivePrograms(Element element) {
        LrtLive lrtLive = new LrtLive();
        String channel = element.attr("data-tvprogname").toLowerCase();
        String showTitle = element.getElementsByClass("channel-item__title").text();
        String time = element.getElementsByClass("data-block__text").text();
        lrtLive.setChannel(channel);
        lrtLive.setShowTitle(showTitle);
        lrtLive.setTime(time);
        return lrtLive;
    }
}
