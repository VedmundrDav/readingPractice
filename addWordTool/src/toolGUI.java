import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;

public class toolGUI extends JFrame {

    private JPanel mainPanel;
    private JPanel outputPanel;
    public JButton whatFileBtn;
    public JButton executeBtn;;
    public JTextField wordToAdd;
    public JTextArea display;
    JScrollPane scrollPane;

    String filePath;

    toolGUI(){
        this.setSize(300,250);
        this.setTitle("Add A Word To Learn");
        this.setResizable(true);
        this.setLayout(new GridLayout(2, 1));

        mainPanel = new JPanel();
        outputPanel = new JPanel();
        outputPanel.setLayout(new BorderLayout());
        outputPanel.setBorder(BorderFactory.createLineBorder(Color.black));
        executeBtn = new JButton("Add");
        wordToAdd = new JTextField();
        wordToAdd.setPreferredSize(new Dimension(100,27));
        whatFileBtn = new JButton("File");
        display = new JTextArea(300, 50);
        scrollPane = new JScrollPane(display);
        scrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);


        this.add(mainPanel);
        this.add(outputPanel);
        mainPanel.add(whatFileBtn);
        mainPanel.add(executeBtn);
        mainPanel.add(wordToAdd);
        outputPanel.add(scrollPane);
        setVisible(true);

        handleEvents();
    }
    private void handleEvents(){
        whatFileBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                establishFilePath();
                if(!(filePath == null)) {
                    displayWords();
                }
            }
        });
        executeBtn.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addWord(wordToAdd);
            }
        });
    }



    private void establishFilePath(){
        String fileName = null;
        JFileChooser fileChooser = new JFileChooser();
        fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);

        if(fileChooser.showOpenDialog(mainPanel) == JFileChooser.APPROVE_OPTION){
            File result = fileChooser.getSelectedFile();
            fileName = result.toString();
        }
        System.out.println(fileName);
        setFilePath(fileName);
    }
    private void setFilePath(String file){
        this.filePath = file;
    }

    private String readWordArray(String file){
        //read from file
        //if string == //JAVA START, store to string
        //stop storing when string == //JAVA END
        String startTag = "//JAVA START";
        String endTag = "//JAVA END";
        String storage = "";
        boolean readFlag = false;
        try{
            File fileToRead = new File(file);
            FileReader fileReader = new FileReader(fileToRead);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line = "";
            while((line=bufferedReader.readLine())!=null && !line.equals(endTag)){
                if(line.equals(startTag)) {
                    readFlag = true;
                }else if (line.equals(endTag)){
                    readFlag = false;
                }
                if(readFlag){
                    storage += line;
                }
            }
            System.out.println("Storage: " + storage);
        } catch(IOException e){
            e.printStackTrace();
        }
        return storage;
    }

    private String trimWords(){
        String words = readWordArray(filePath);

        String trimmedWords = words.substring(24); /*this probably needs to be done better ...
                                                    too early in the morning to think of a better way..*/
        String formattedWords = trimmedWords.replaceAll("[\\[\\]\"\";]","");
        String finalString = formattedWords.replaceAll(", ","\n");

        System.out.println("output: \n" + finalString.trim());
        return finalString.trim();
    }

    private void displayWords(){
        String words = trimWords();
        display.setText(words);
    }

    private void addWord(JTextField word){
        String words = trimWords();
        display.setText("");
        words += "\n" + word.getText();
        display.setText(words);
        //then write to file
        writeToFile(display);
    }
    private void writeToFile(JTextArea textToAdd){
        //need to format textToAdd so that it works with JavaScript
        String beginTag = "var words = [\"";
        String endTag = "\"];";
        String completeLine = beginTag + textToAdd.getText().replaceAll("\n", "\", \"") + endTag;
        //System.out.println(completeLine);
        //to write to file you must read from file ...... wise words

        try{
            File file = new File(filePath);
            FileReader fileReader = new FileReader(file);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line = "";
            String wholeFile = "";
            while((line=bufferedReader.readLine())!=null){
                wholeFile+=line + "\n";
            }
            System.out.println("File content: " + wholeFile);
            String[] splitFile = wholeFile.split("\n");
            for(int i = 0; i < splitFile.length; i++){
                if(splitFile[i].startsWith("var words = [\"")){
                    System.out.println("Bam boobity bam");
                    splitFile[i] = completeLine;
                }
            }
            wholeFile = "";
            for(int i = 0; i < splitFile.length; i++){
                wholeFile+=splitFile[i] + "\n";
            }
            System.out.println("Modified File content: " + wholeFile);
            FileWriter writer = new FileWriter(file);
            writer.write(wholeFile); //pray this works...?
            writer.close();
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
