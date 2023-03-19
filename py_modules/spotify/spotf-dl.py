import os
import glob
import shutil
import subprocess
import sys

path = "C:\\Projects\\node\\Telegraf\\music"

#link of playlist, song or album by input from user
song_link = str(sys.argv[1])

# song_name
song_name = str(sys.argv[2])

isExisting = os.path.exists(path+song_name+'.mp3')
# print(isExisting)
# subprocess.run(f'spotdl {song_link}') if(isExisting == False) else print("Already Existed")

#  file finding pattern
allfile = glob.glob('*.mp3*',recursive = True)
# print(allfile)

# #for all files in dl folder to move into music folder
for file_path in allfile:
    os.rename("../../Testing_codes/"+file_path,song_name+".mp3")
    shutil.move("../../Testing_codes/"+song_name+".mp3",path)
    print("Song Downloaded")