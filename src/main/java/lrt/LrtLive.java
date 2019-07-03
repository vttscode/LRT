package lrt;

public class LrtLive {

    private String channel;
    private String showTitle;
    private String time;

    public LrtLive() {
    }

    public LrtLive(String channel, String showTitle, String time) {
        this.channel = channel;
        this.showTitle = showTitle;
        this.time = time;
    }

    public String getShowTitle() {
        return showTitle;
    }

    public void setShowTitle(String showTitle) {
        this.showTitle = showTitle;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    @Override
    public String toString() {
        return "CurrentShow{" +
                "channel='" + channel + '\'' +
                ", showTitle='" + showTitle + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}